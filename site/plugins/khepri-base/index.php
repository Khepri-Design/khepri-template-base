<?php

@include_once __DIR__ . '/vendor/autoload.php';
require_once __DIR__ . '/src/helpers.php';

use Kirby\Cms\App;
use Kirby\Toolkit\Tpl as Snippet;

kirby()->extend([
  'options' => require __DIR__ . '/config/config.php',
]);

Kirby::plugin('khepri-design/khepri-base', [
  'blueprints' => [
    'site' => __DIR__ . '/blueprints/site.yml',
    'sections/pagebuilder' => __DIR__ . '/blueprints/sections/pagebuilder.yml',
    'sections/socialmedia' => __DIR__ . '/blueprints/sections/socialmedia.yml',
    'tabs/meta' => __DIR__ . '/blueprints/tabs/meta.yml',
    'tabs/settings' => __DIR__ . '/blueprints/tabs/settings.yml',
    'pages/blog-item' => __DIR__ . '/blueprints/pages/blog-item.yml',
    'pages/blog-overview' => __DIR__ . '/blueprints/pages/blog-overview.yml',
    'pages/event-item' => __DIR__ . '/blueprints/pages/event-item.yml',
    'pages/event-overview' => __DIR__ . '/blueprints/pages/event-overview.yml',
    'pages/contact' => __DIR__ . '/blueprints/pages/contact.yml',
    'pages/datenschutz' => __DIR__ . '/blueprints/pages/datenschutz.yml',
    'pages/home' => __DIR__ . '/blueprints/pages/home.yml',
    'pages/impressum' => __DIR__ . '/blueprints/pages/impressum.yml',
    'pages/link' => __DIR__ . '/blueprints/pages/link.yml',
    'pages/page' => __DIR__ . '/blueprints/pages/page.yml',
    'pages/page-heading' => __DIR__ . '/blueprints/pages/page-heading.yml',
    'users/client' => __DIR__ . '/blueprints/users/client.yml',
    'blocks/audio' => __DIR__ . '/blueprints/blocks/audio.yml',
    'blocks/iframe' => __DIR__ . '/blueprints/blocks/iframe.yml',
    'blocks/button' => __DIR__ . '/blueprints/blocks/button.yml',
    'blocks/cardbox' => __DIR__ . '/blueprints/blocks/cardbox.yml',
    'blocks/divider' => __DIR__ . '/blueprints/blocks/divider.yml',
    'blocks/download' => __DIR__ . '/blueprints/blocks/download.yml',
    'blocks/checklist' => __DIR__ . '/blueprints/blocks/checklist.yml',
    'blocks/hint' => __DIR__ . '/blueprints/blocks/hint.yml',
    'blocks/snippet' => __DIR__ . '/blueprints/blocks/snippet.yml',
    'blocks/spacer' => __DIR__ . '/blueprints/blocks/spacer.yml',
    'blocks/accordion' => __DIR__ . '/blueprints/blocks/accordion.yml',
    'blocks/accordionitem' => __DIR__ . '/blueprints/blocks/accordionitem.yml',
    'blocks/hook' => __DIR__ . '/blueprints/blocks/hook.yml',
    'blocks/gallery' => __DIR__ . '/blueprints/blocks/gallery.yml',
    'blocks/heading' => __DIR__ . '/blueprints/blocks/heading.yml',
    'blocks/textadvanced' => __DIR__ . '/blueprints/blocks/textadvanced.yml',
    'files/default' => __DIR__ . '/blueprints/files/default.yml',
  ],
  'controllers' => [
    'login' => require 'controllers/login.php',
    'contact' => require 'controllers/contact.php'
  ],
  'snippets' => [
    'includes/entry' => __DIR__ . '/snippets/includes/entry.twig',
    'contact' => __DIR__ . '/snippets/contact.twig',
    'includes/entry-columns' => __DIR__ . '/snippets/includes/entry-columns.twig',
    'includes/route' => __DIR__ . '/snippets/includes/route.twig',
    'includes/blog-preview' => __DIR__ . '/snippets/includes/blog-preview.twig',
    'includes/event-preview' => __DIR__ . '/snippets/includes/event-preview.twig',
    'head/head' => __DIR__ . '/snippets/head/head.twig',
    'head/head-dynamic-styles' => __DIR__ . '/snippets/head/head-dynamic-styles.twig',
    'head/head-includes' => __DIR__ . '/snippets/head/head-includes.twig',
    'head/head-meta' => __DIR__ . '/snippets/head/head-meta.twig',
    'navigation/navigation' => __DIR__ . '/snippets/navigation/navigation.twig',
    'footer/back-to-top' => __DIR__ . '/snippets/footer/back-to-top.twig',
    'footer/socialmedia' => __DIR__ . '/snippets/footer/socialmedia.twig',
    'footer/copyright-credits' => __DIR__ . '/snippets/footer/copyright-credits.twig',
    'footer/footer' => __DIR__ . '/snippets/footer/footer.twig',
    'blocks/heading' => __DIR__ . '/snippets/blocks/heading.twig',
    'blocks/image' => __DIR__ . '/snippets/blocks/image.twig',
    'blocks/gallery' => __DIR__ . '/snippets/blocks/gallery.twig',
    'blocks/video' => __DIR__ . '/snippets/blocks/video.twig',
    'blocks/list' => __DIR__ . '/snippets/blocks/list.twig',
    'blocks/audio' => __DIR__ . '/snippets/blocks/audio.twig',
    'blocks/button' => __DIR__ . '/snippets/blocks/button.twig',
    'blocks/cardbox' => __DIR__ . '/snippets/blocks/cardbox.twig',
    'blocks/divider' => __DIR__ . '/snippets/blocks/divider.twig',
    'blocks/download' => __DIR__ . '/snippets/blocks/download.twig',
    'blocks/checklist' => __DIR__ . '/snippets/blocks/checklist.twig',
    'blocks/hint' => __DIR__ . '/snippets/blocks/hint.twig',
    'blocks/iframe' => __DIR__ . '/snippets/blocks/iframe.twig',
    'blocks/snippet' => __DIR__ . '/snippets/blocks/snippet.twig',
    'blocks/spacer' => __DIR__ . '/snippets/blocks/spacer.twig',
    'blocks/accordion' => __DIR__ . '/snippets/blocks/accordion.twig',
    'blocks/accordionitem' => __DIR__ . '/snippets/blocks/accordionitem.twig',
    'blocks/hook' => __DIR__ . '/snippets/blocks/hook.twig',
    'blocks/textadvanced' => __DIR__ . '/snippets/blocks/textadvanced.twig',
  ],
  'templates' => [
    'blog-item' => __DIR__ . '/templates/blog-item.twig',
    'blog-overview' => __DIR__ . '/templates/blog-overview.twig',
    'event-item' => __DIR__ . '/templates/event-item.twig',
    'event-overview' => __DIR__ . '/templates/event-overview.twig',
    'datenschutz' => __DIR__ . '/templates/datenschutz.twig',
    'home' => __DIR__ . '/templates/home.twig',
    'impressum' => __DIR__ . '/templates/impressum.twig',
    'maintenance' => __DIR__ . '/templates/maintenance.twig',
    'page' => __DIR__ . '/templates/page.twig',
    'page-heading' => __DIR__ . '/templates/page-heading.twig',
    'default' => __DIR__ . '/templates/default.twig',
    'login' => __DIR__ . '/templates/login.twig',
    'contact' => __DIR__ . '/templates/contact.twig',
    'emails/email' => __DIR__ . '/templates/emails/email.twig',
    'emails/email.html' => __DIR__ . '/templates/emails/email.html.twig',
  ],
  'sections' => [
    'filesdisplay' => require __DIR__ . DIRECTORY_SEPARATOR . 'src' . DIRECTORY_SEPARATOR . 'FilesDisplaySection.php'
  ],
  'components' => [
    'template' => function (App $kirby, string $name, string $contentType = 'html', string $defaultType = 'html') {
        return new khepri\Twig\Template($name, $contentType, $defaultType);
    },
    'snippet' => function (Kirby $kirby, string $name, array $data = []) {
        $snippets = A::wrap($name);

        foreach ($snippets as $name) {
            $name = (string)$name;
            $file = $kirby->root('snippets') . '/' . $name . '.php';

            if (file_exists($file) === false) {
                $file = $kirby->root('snippets') . '/' . $name . '.twig';
                if (file_exists($file)) {
                    return twig('@snippets/' . $name . '.twig', $data);
                }
                else {
                    $file = $kirby->extensions('snippets')[$name] ?? null;

                    if (Str::endsWith(strtolower($file), '.twig')) {
                        return twig($name . '.twig', $data);
                    }
                }
            }

            if ($file) {
                break;
            }
        }

        return Snippet::load($file, $data);
    }
  ],
  'fields' => [
    'colors' => [
        'props' => [
            'value' => function ($value = null) {
                return is_array($value) ? $value[0] : $value;
            },
            'help' => function ($help = null) {
                return $help;
            },
            'alpha' => function (bool $alpha = false) {
                return $alpha;
            },
            'contrast' => function ($contrast = false) {
                return $contrast;
            }
        ],
        'save' => function ($value) {
            return $value;
        }
    ]
  ],
  'fieldMethods' => [
      'isHex' => function ($field) {
          $color = $field->toClass($field);
          return $color->toSpace() === 'hex';
      },
      'isRgb' => function ($field) {
          $color = $field->toClass($field);
          return $color->toSpace() === 'rgb';
      },
      'isHsl' => function ($field) {
          $color = $field->toClass($field);
          return $color->toSpace() === 'hsl';
      },
      'toClass' => function ($field) {
          $value = is_array($field->value) ? $field->value[0] : $field->value;
          return new khepri\Color($value);
      },
      'toColor' => function ($field, $space = null) {
          $color = $field->toClass($field);
          return $color->toString($space);
      },
      'toSpace' => function ($field) {
          $color = $field->toClass($field);
          return $color->toSpace();
      },
      'toValues' => function ($field) {
          $color = $field->toClass($field);
          return $color->toValues();
      },
      'toReadabilityReport' => function ($field) {
          $color = $field->toClass($field);
          $blueprint = $field
              ->model()
              ->blueprint()
              ->fields();
          $name = $field->key();

          if (
              isset($blueprint[$name]['contrast']) &&
              is_array($blueprint[$name]['contrast'])
          ) {
              return $color->toReadabilityReport(
                  $blueprint[$name]['contrast']
              );
          }

          return $color->toReadabilityReport();
      },
      'toMostReadable' => function ($field) {
          $color = $field->toClass($field);
          $blueprint = $field
              ->model()
              ->blueprint()
              ->fields();
          $name = $field->key();

          if (
              isset($blueprint[$name]['contrast']) &&
              is_array($blueprint[$name]['contrast'])
          ) {
              $readable = $color->toMostReadable(
                  $blueprint[$name]['contrast']
              );
          } else {
              $readable = $color->toMostReadable();
          }

          $space = $color->toSpace();

          if (count($readable) === 0) {
              return;
          }

          return array_shift($readable)['color']->toString($space);
      }
    ]
]);