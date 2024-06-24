import {defineConfig} from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
    base: '/Crypted',
    plugins: [
        VitePWA({
            injectRegister: 'auto',
            registerType: 'autoUpdate',
            devOptions: {
                enabled: true
            },
            includeAssets: ['favicon.svg'],
            manifest: {
                name: 'Cryption Aganst Censorship',
                short_name: "Crypted",
                theme_color: "#39c5bb",
                start_url: "./",
                display: "standalone",
                background_color: "#39c5bb",
                icons: [
                    {
                        src: "favicon.svg",
                        sizes: "16x16 32x32 48x48 64x64 128x128 256x256 512x512",
                        type: "image/svg+xml",
                        purpose: "any",
                    },
                ],
            },
        })
    ],
});