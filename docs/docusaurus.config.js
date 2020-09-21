module.exports = {
  title: 'React Flow',
  tagline: 'Highly customizable library for creating node based editors, diagrams and charts.',
  url: 'https://reactflow.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'wbkd',
  projectName: 'react-flow-docs',
  customFields: {
    meta: {
      title: 'React Flow API docs',
      description: 'Highly customizable React.js library for creating node based editors, diagrams and charts.',
    },
  },
  themeConfig: {
    navbar: {
      title: 'Home',
      logo: {
        alt: 'ReactFlow',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'examples/',
          activeBasePath: 'examples',
          label: 'Examples',
          position: 'left',
        },
        {
          href: 'https://github.com/wbkd/react-flow',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'test',
          items: [
            {
              label: 'API',
              to: 'docs/',
            },
            {
              label: 'Examples',
              to: 'examples/',
            },
          ],
        },

        {
          title: 'More',
          items: [
            {
              label: 'Twitter',
              to: 'https://twitter.com/webk1d',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/wbkd/react-flow',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} React Flow. Built by webkid`,
    },
  },
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'examples',
        path: 'examples',
        editUrl: 'https://github.com/wbkd/react-flow/edit/main/docs/',
        routeBasePath: 'examples',
        sidebarPath: require.resolve('./sidebarsExamples.js'),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/wbkd/react-flow/edit/main/docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};