<?php

/**
 * Shortcut for khepri\Twig\Plugin::render
 *
 * @package  Kirby Twig Plugin
 * @author   Florens Verschelde <florens@fvsch.com>
 * @param    string $template
 * @param    array  $userData
 * @return   string
 */
function twig($template='', $userData=[])
{
    return khepri\Twig\Plugin::render($template, $userData);
}
