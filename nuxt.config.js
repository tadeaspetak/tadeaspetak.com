module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Tadeáš Peták',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // Open Graph
      { name: 'og:title', content: 'Tadeáš Peták' },
      {
        name: 'og:description',
        content:
          'Massive fan of yoga, books, and the outdoors. Scouting for Øredev.'
      },
      { name: 'og:type', content: 'website' },
      { name: 'og:url', content: 'https://tadeaspetak.com' },
      { name: 'og:image', content: 'https://tadeaspetak.com/head.jpg' }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-16x16.png',
        sizes: '16x16'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-32x32.png',
        sizes: '32x32'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-64x64.png',
        sizes: '64x64'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Amiri|Noto+Serif&display=swap'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    [
      'nuxt-fontawesome',
      {
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas']
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab']
          }
        ]
      }
    ]
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
