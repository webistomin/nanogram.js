const { description } = require('../../package.json')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'nanogram.js',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#af2ca2' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/nanogram.js@2.0.0/dist/nanogram.iife.min.js' }]
  ],

  dest: '../dist',

  base: '/nanogram.js/',

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: true,
    nav: [
      {
        text: 'How to use',
        link: '/how-to-use/installation.html',
      },
      {
        text: 'Examples',
        link: '/examples/vanilla-js.html',
      },
    ],
    sidebar: [
      {
        path: '/how-to-use/installation.html',
        title: 'How to use',
        collapsable: false,
        children: [
          '/how-to-use/installation',
          '/how-to-use/using-nanogram',
        ],
        sidebarDepth: 2
      },
      {
        path: '/examples/vanilla-js.html',
        title: 'Examples',
        collapsable: false,
        children: [
          '/examples/vanilla-js',
          '/examples/node-js',
        ],
        sidebarDepth: 2
      }
    ],
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    // '@vuepress/plugin-back-to-top',
    // '@vuepress/plugin-medium-zoom',
  ]
}
