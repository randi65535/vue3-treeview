const path = require('path');

module.exports = {
    title: 'vue3-treeview',
    description: 'vue3-treeview documentation',
    base: '/vue3-treeview/',
    themeConfig: {
      repo: 'N00ts/vue3-treeview',
      docsDir: 'docs',
      editLinks: true,
      editLinkText: 'Edit this page on GitHub',
      nav: [
        {
          text: 'Guide',
          link: "/guide/getting-started"
        },
        {
          text: 'Examples',
          link: '/examples/',
        }
      ],
      sidebar: {
          "/guide/": getSidebar()
      }
  },
  alias: {
    '@docs': path.resolve(__dirname, '..'),
    '@src': path.resolve(__dirname, '../../src'),
  },
}

function getSidebar() {
    return [
      {
        text: 'Introduction',
        link: '/guide/getting-started'
      },
      {
        text: 'Properties',
        link: '/guide/properties'
      },
    ]
  }