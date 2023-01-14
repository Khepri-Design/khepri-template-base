<?php
return [
  'usephp' => true,
  'phpLog' => true,
  'email' => [
    'transport' => require __DIR__ . '/mailer.php',
  ],
  'khepri.twig.env.tests' => [
    'existing file' => 'twig_test_existing'
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