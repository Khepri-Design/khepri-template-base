<?php
return [
  'usephp' => true,
  'phpLog' => true,
  'email' => [
    'transport' => require __DIR__ . '/mailer.php',
  ],
  'routes' => [
    [
      'pattern' => 'logout',
      'action'  => function() {

        if ($user = kirby()->user()) {
          $user->logout();
        }

        go('login');

      }
    ]
  ]
];
?>