require('dotenv').config();

export default {
  head: {
    title: 'Cashforce App',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
  },

  css: [],

  plugins: [],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
  ],

  modules: [
    '@nuxtjs/axios',
  ],

  axios: {
    baseURL: `http://localhost:${process.env.API_PORT || 3001}`,
  },

  build: {},
}
