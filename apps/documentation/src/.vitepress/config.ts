// import { defineConfig } from 'vitepress'

// export default defineConfig({
//   title: '@shaggytools/nhtsa-api-wrapper',
//   titleTemplate: ":title - Javascript Wrapper for the NHTSA VPIC API",
//   description: 'Documentation website for @shaggytools/nhtsa-api-wrapper',
//   appearance: 'dark',
//   base: '/nhtsa-api-wrapper/',
// })

import { createRequire } from 'module'
import { defineConfig } from 'vitepress'

const require = createRequire(import.meta.url)
const pkg = require('@shaggytools/nhtsa-api-wrapper/package.json')

export default defineConfig({
  lang: 'en-US',
  title: '@shaggytools/nhtsa-api-wrapper',
  description: 'Documentation website for @shaggytools/nhtsa-api-wrapper',

  appearance: 'dark',
  lastUpdated: true,
  cleanUrls: true,

  head: [['meta', { name: 'theme-color', content: '#3c8772' }]],

  base: '/nhtsa-api-wrapper/',

  markdown: {
    headers: {
      level: [0, 0],
    },
  },

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/guide/': sidebarGuide(),
      '/api/': sidebarApi(),
    },

    editLink: {
      pattern:
        'https://github.com/shaggytech/nhtsa-api-wrapper/edit/main/apps/documentation/:path',
      text: 'Edit this page on GitHub',
    },

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/shaggytech/nhtsa-api-wrapper',
      },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2017-present Brandon Eichler',
    },
  },
})

function nav() {
  return [
    { text: 'Guide', link: '/guide/', activeMatch: '/guide/' },
    { text: 'API Reference', link: '/api/', activeMatch: '/api/' },
    {
      text: pkg.version,
      items: [
        {
          text: 'Changelog',
          link: 'https://github.com/shaggytech/nhtsa-api-wrapper/blob/main/CHANGELOG.md',
        },
        {
          text: 'Contributing',
          link: 'https://github.com/shaggytech/nhtsa-api-wrapper/blob/main/.github/contributing.md',
        },
      ],
    },
  ]
}

function sidebarGuide() {
  return [
    {
      text: 'Guide',
      collapsed: false,
      items: [
        { text: 'Introduction', link: '/guide/' },
        { text: 'Getting Started', link: '/guide/getting-started' },
        { text: 'Configuration', link: '/guide/configuration' },
        { text: 'Routing', link: '/guide/routing' },
        { text: 'Deploying', link: '/guide/deploying' },
        { text: 'Internationalization', link: '/guide/i18n' },
      ],
    },
    {
      text: 'Writing',
      collapsed: false,
      items: [
        { text: 'Markdown', link: '/guide/markdown' },
        { text: 'Asset Handling', link: '/guide/asset-handling' },
        { text: 'Frontmatter', link: '/guide/frontmatter' },
        { text: 'Using Vue in Markdown', link: '/guide/using-vue' },
        { text: 'API Reference', link: '/guide/api' },
      ],
    },
    {
      text: 'Theme',
      collapsed: false,
      items: [
        { text: 'Introduction', link: '/guide/theme-introduction' },
        { text: 'Nav', link: '/guide/theme-nav' },
        { text: 'Sidebar', link: '/guide/theme-sidebar' },
        { text: 'Prev Next Link', link: '/guide/theme-prev-next-link' },
        { text: 'Edit Link', link: '/guide/theme-edit-link' },
        { text: 'Last Updated', link: '/guide/theme-last-updated' },
        { text: 'Layout', link: '/guide/theme-layout' },
        { text: 'Home Page', link: '/guide/theme-home-page' },
        { text: 'Team Page', link: '/guide/theme-team-page' },
        { text: 'Badge', link: '/guide/theme-badge' },
        { text: 'Footer', link: '/guide/theme-footer' },
        { text: 'Search', link: '/guide/theme-search' },
        { text: 'Carbon Ads', link: '/guide/theme-carbon-ads' },
      ],
    },
    {
      text: 'Migrations',
      collapsed: false,
      items: [
        {
          text: 'Migration from VuePress',
          link: '/guide/migration-from-vuepress',
        },
        {
          text: 'Migration from VitePress 0.x',
          link: '/guide/migration-from-vitepress-0',
        },
      ],
    },
  ]
}

function sidebarApi() {
  return [
    {
      text: 'API',
      items: [
        { text: 'Introduction', link: '/config/introduction' },
        { text: 'App Configs', link: '/config/app-configs' },
        { text: 'Theme Configs', link: '/config/theme-configs' },
        { text: 'Frontmatter Configs', link: '/config/frontmatter-configs' },
      ],
    },
  ]
}
