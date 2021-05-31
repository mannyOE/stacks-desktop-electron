/**
 * By default, Nuxt.js is configured to cover most use cases.
 * This default configuration can be overwritten in this file
 * @link {https://nuxtjs.org/guide/configuration/}
 */


module.exports = {
  mode: 'spa', // or 'universal'
  head: {
    title: 'Staxave',
    meta: [{ charset: "utf-8" }]
  },
  loading: false,
  plugins: [
      { ssr: false, src: '@/plugins/icons.js' },
      '@/plugins/apis.js',
      '@/plugins/config.js',
      '@/plugins/vuetify.js',
      '@/plugins/global-comps.js'
  ],
  buildModules: [
    '@nuxtjs/vuetify'
  ],
    modules: [
        ["vue-toastification/nuxt", {
            timeout: 1000,
            draggable: false
          }]
  ],
};
