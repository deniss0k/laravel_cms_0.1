const mix = require('laravel-mix');

mix.sass('resources/adm/sass/styles.scss', 'public/adm/css')
    .sass('resources/assets/sass/styles.scss', 'public/css');
