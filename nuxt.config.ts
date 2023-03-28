// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'FreeEco | Экологическая фриланс-биржа',
            htmlAttrs: {
                lang: 'ru'
            },
            bodyAttrs: {
                class: 'sidebar-enabled',
                id: 'kt_body'
            },
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { hid: 'description', name: 'description', content: 'Testing Nuxt3' },
                { name: 'format-detection', content: 'telephone=no' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' }
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700' },
                //{ rel: 'stylesheet', href: '/css/style.css' },
            ],
            noscript: [
                // <noscript>Javascript is required</noscript>
                { children: 'Javascript is required' }
            ]
        },
        // pageTransition: {
        //     name: 'fade',
        //     mode: 'out-in' // default
        // },
        layoutTransition: {
            name: 'fade',
            mode: 'out-in' // default
        }
    },

    plugins: [
        { src: '~/plugins/helpers/' },
        { src: "~/plugins/useBootstrap.client.ts", mode: "client" },
    ],

    // vite: {
    //     css: {
    //       preprocessorOptions: {
    //         scss: {
    //           additionalData: '@import "@/assets/sass/style.scss";'
    //         }
    //       }
    //     }
    // },
    css: [
        '@/assets/css/style.css',
        '@/assets/css/plugins.css',
        '@/assets/css/fontawesome.css',
    ],
    // script: [
    //     {
    //       src: "bootstrap/dist/js/bootstrap.bundle.min.js",
    //       type: "text/javascript"
    //     }
    // ],

    runtimeConfig: {
        // The private keys which are only available within server-side
        
        //updateVIA: Number(process.env.UPDATE_VIA) || 60,

        // Keys within public, will be also exposed to the client-side
        public: {
            apiSecret: process.env.API_SECRET || '123456789',
            apiURL: process.env.API_URL || '/api/',
        }
    },

})
