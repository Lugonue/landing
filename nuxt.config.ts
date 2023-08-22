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
                { name: 'format-detection', content: 'telephone=no' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },

                { name: 'robots', content: process.env.NODE_ENV === 'development' ? 'none' : 'all' },
                { name: 'yandex', content: process.env.NODE_ENV === 'development' ? 'none' : 'all' },
                { name: 'googlebot', content: process.env.NODE_ENV === 'development' ? 'none' : 'all' },
                { name: 'googlebot-news', content: process.env.NODE_ENV === 'development' ? 'none' : 'all' },

                //{ hid: 'description', name: 'description', content: 'Первая фриланс-биржа экологических работ для бизнеса' },

                { property: "og:locale", content: "ru" },
                { property: "og:type", content: "website" },
                { property: "og:site_name", content: "FreeEco | Экологическая фриланс-биржа" },

                { name: "msapplication-TileColor", content: "#da532c" },
                { name: "theme-color", content: "#ffffff" }
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700' },
                { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
                { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
                { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
                { rel: "manifest", href: "/site.webmanifest" },
                { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" },
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

    modules: [
        '@nuxtjs/robots',
        [
            'yandex-metrika-module-nuxt3',
            {
                id: '93442093',
                webvisor: true,
                clickmap: true,
                trackHash: true,
                trackLinks: true,
                accurateTrackBounce: true,
                useCDN: false,
                consoleLog: false,
            }
        ],
        'nuxt-gtag'
    ],

    gtag: {
        id: 'G-V9MW2FE2LP'
    },

    plugins: [
        { src: '~/plugins/helpers/index.ts' },
        { src: "~/plugins/useBootstrap.client.ts", mode: "client" },
        { src: "~/plugins/layout/index.client.ts", mode: "client" },
        { src: "~/plugins/components/index.client.ts", mode: "client" },
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
            development: process.env.NODE_ENV == 'development' ? true : false,
            apiSecret: process.env.API_SECRET || '123456789',
            apiURL: (process.env.NODE_ENV == 'development' ? process.env.API_URL_DEV : process.env.API_URL) || '/api/',
            storageURL: (process.env.NODE_ENV == 'development' ? process.env.STORAGE_URL_DEV : process.env.STORAGE_URL) || '/storage/',

            appName: process.env.APP_NAME || '',
            appDescription: process.env.APP_DESCRIPTION || '',

            google_analytics_id: process.env.NODE_ENV == 'development' ? '' : 'G-RL73XDVP6V',
        }
    },

})
