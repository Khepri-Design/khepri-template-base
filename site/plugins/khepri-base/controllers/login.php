<?php

return function ($kirby) {

  if ($kirby->user()) {
    go('/');
  }

  $error = false;

  if ($kirby->request()->is('POST') && get('login')) {

    try {
      $kirby->auth()->login(get('email'), get('password')); 
    } catch (Exception $e) {
      $error = true;
    }

    $goThen = get('go') ?? null;
    if ($goThen != null) {
      go(get('go'));
    } else {
      go("/");
    }
  }

  return [
    'error' => $error
  ];

};