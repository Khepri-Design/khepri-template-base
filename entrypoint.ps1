#!/bin/sh

chown -R www-data:www-data /var/www/html/content
cp -nR /var/www/html/template /var/www/html/content
rm -rf /var/www/html/template