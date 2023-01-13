<?php

return function($kirby, $pages, $page) {
    $alert = null;
    $fileAlerts = null;
    $attachments = [];

    $from = new \Kirby\Cms\User([
        'email' => strval($page->mailrecipient()),
        'name' => strval($page->displayName())
    ]);
    
    if($kirby->request()->is('POST') && get('submit')) {
        
        // check the honeypot
        if(empty(get('website')) === false) {
            go($page->url());
            exit;
        }

        $data = [
            'name'  => get('name'),
            'email' => get('email'),
            'phone'  => get('phone'),
            'subject'  => get('subject'),
            'text'  => get('text'),
            'agree'  => get('agree'),
        ];

        $rules = [
            'name'  => ['required', 'minLength' => 2],
            'email' => ['required', 'email'],
            'phone' => ['minLength' => 3, 'maxLength' => 20],
            'subject' => ['required', 'minLength' => 1],
            'text'  => ['required', 'minLength' => 3, 'maxLength' => 3000],
            'agree' => ['required'],
        ];

        $messages = [
            'name'  => 'Der Name ist zu kurz',
            'email' => $data['email'].' ist keine gültige E-Mail',
            'phone' => $data['phone'].' ist keine gültige Telefonnummer',
            'subject' => 'Bitte einen Betreff eingeben',
            'text'  => 'Die Nachricht sollte zwischen 3 und 3000 Zeichen beinhalten',
            'agree'  => 'Bitte die Datenschutzbestimmungen akzeptieren',
        ];

        $uploads = $kirby->request()->files()->get('uploadFiles');

        if ( count($uploads) > 5) {
            $fileAlerts[] = 'Bitte maximal 5 Dateien hochladen';
        }

        foreach ($uploads as $upload) {
            if ($upload['error'] !== 0) { 
            } elseif ($upload['size'] > 2000000)  {
                $fileAlerts[] = '"' . $upload['name'] . '" ist zu groß (max. 2 MB)';
            } elseif ($upload['type'] !== 'application/pdf' and $upload['type'] !== 'image/png' and $upload['type'] !== 'image/jpeg' and $upload['type'] !== 'application/zip') {
                $fileAlerts[] = '"' . $upload['name'] . '" muss vom Dateityp PDF, PNG, JPG/JPEG oder ZIP sein';
            // all valid, try to rename the temporary file
            } else {
                $name     = $upload['tmp_name'];
                $tmpName  = pathinfo($name);
                // sanitize the original filename
                $filename = $tmpName['dirname']. '/'. F::safeName($upload['name']);

                if (rename($upload['tmp_name'], $filename)) {
                    $name = $filename;
                }
                // add the files to the attachments array
                $attachments[] = $name;
            }  
        }

        // some of the data is invalid
        if($invalid = invalid($data, $rules, $messages)) {
            $alert = $invalid;

        // the data is fine, let's send the email
        } elseif (empty($fileAlerts)) {
            try {
                $kirby->email([
                    'template' => 'email',
                    'from'     => $from,
                    'name'     => strval($page->displayName()),
                    'replyTo'  => $data['email'],
                    'to'       => strval($page->mailrecipient()),
                    'subject'  => strval($page->subjectPrefix()).' [Betreff: '.esc($data['subject']).']',
                    'data'     => [
                        'name' => esc($data['name']),
                        'email' => esc($data['email']),
                        'phone' => esc($data['phone']),
                        'subject'   => esc($data['subject']),
                        'text'   => esc($data['text']),
                    ],
                    'attachments' => $attachments
                ]);

            } catch (Exception $error) {
                if(option('debug')):
                    $alert['error'] = 'Formular konnte nicht versendet werden: <strong>' . $error->getMessage() . '</strong>';
                else:
                    $alert['error'] = 'Formular konnte nicht versendet werden';
                endif;
            }

            // no exception occurred, let's send a success message
            if (empty($alert) === true) {
                $success = 'Vielen Dank! Die Nachricht hat uns erreicht. Wir melden uns so schnell wie möglich.';
                $data = [];
            }
        }
    }

    return [
        'alert'   => $alert,
        'fileAlerts' => $fileAlerts,
        'data'    => $data ?? false,
        'success' => $success ?? false
    ];
};
?>
