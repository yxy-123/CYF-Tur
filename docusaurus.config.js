// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Create You Frisk中文教程',
  tagline: 'by yxy-123',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://anxing233.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/AnXing233/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'AnXing233', // Usually your GitHub org/user name.
  projectName: 'CYF-Tur', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'CYF教程',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '教程',
          },
          {
            href: 'https://github.com/yxy-123/CYF-Tur',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '教程',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: '相关链接',
            items: [
              {
                label: 'CYF的Github页面',
                href: 'https://github.com/RhenaudTheLukark/CreateYourFrisk',
              },
              {
                label: 'CYF官方Discord',
                href: 'https://discord.gg/GFJ5277',
              },
              {
                label: 'yxy-123的哔哩哔哩主页',
                href: 'https://space.bilibili.com/348000132/',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/yxy-123/CYF-Tur',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['lua'],
      },
      
      themes: [
      // ... Your other themes.
      [
        require.resolve("@easyops-cn/docusaurus-search-local"),
        /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
        ({
        hashed: true,
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        searchBarPosition: "right",
        language: ['en','zh'],
        }),
      ],
    ],
    }),
    plugins: [
      [require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        searchBarPosition: "right",
        language: ['en','zh'],
        },
      ],
    ],
    
};
module.exports = config;
