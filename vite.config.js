import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
// import vue2 from '@vitejs/plugin-vue2';
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/site.css',
                // 'resources/css/swiper-bundle.min.css',
                // 'resources/css/venobox.min.css',

                'resources/js/site.js',
                // 'resources/js/preline.js',
                // 'resources/js/swiper-bundle.min.js',
                // 'resources/js/venobox.min.js',
                // 'resources/js/clipboard.min.js',
                // 'resources/js/main.js',

                // Control Panel assets.
                // https://statamic.dev/extending/control-panel#adding-css-and-js-assets
                // 'resources/css/cp.css',
                // 'resources/js/cp.js',
            ],
            refresh: true,
        }),
        // vue2(),
    ],
});
