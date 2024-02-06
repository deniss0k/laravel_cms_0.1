import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/adm/src/assets/sass/style.scss'],
            refresh: true,
        }),
    ],
    build: {
        outDir: 'public/assets/adm',
    },
});
