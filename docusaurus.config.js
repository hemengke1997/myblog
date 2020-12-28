const remarkImages = require('remark-images');
const rehypeTruncate = require('rehype-truncate');

module.exports = {
  title: 'hemengke1997',
  tagline: '记录平时的前端学习以及理财',
  url: 'https://hemengke1997.github.io',
  baseUrl: '/myblog/',
  onBrokenLinks: 'throw', // 当 Docusaurus 检测到任何无效的链接时所应采取的行为。
  onBrokenMarkdownLinks: 'warn', // 当Docusaurus检测到任何断开的Markdown链接时的行为。
  favicon: 'img/favicon.ico',
  organizationName: 'hemengke1997', // Usually your GitHub org/user name.
  projectName: 'myblog', // Usually your repo name.
  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en', 'fr'],
  //   localeConfigs: {
  //     en: {
  //       label: 'English',
  //     },
  //     fr: {
  //       label: 'Français',
  //     },
  //   },
  // },
  themeConfig: {
    hideableSidebar: true, // 可以隐藏侧边栏
    // algolia: {
    //   // 搜索组件
    // },
    switchConfig: {
      darkIcon: '🌙',
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'hemengke1997',
      hideOnScroll: true,
      logo: {
        alt: 'logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'blog/',
          label: '理财博客',
          position: 'left'
        },
        {
          to: 'docs/',
          label: '知识文档',
          position: 'left',
        },
        {
          href: 'https://github.com/hemengke1997',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} hemengke1997 Inc. Built with Docusaurus.`,
    },
    announcementBar: {
      id: 'supportus',
      content:
        '⭐️ If you like my website, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/hemengke1997/myblog">GitHub</a>! ⭐️',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/hemengke1997/myblog/blob/master',
          remarkPlugins: [remarkImages],
          rehypePlugins: [rehypeTruncate],
        },
        blog: {
          path: 'blog',
          showReadingTime: true,
          editUrl:
            'https://github.com/hemengke1997/myblog/blob/master',
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} hemengke1997, Inc.`,
          },
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      },
    ],
  ],
  plugins: [
    ['docusaurus-plugin-sass', {}],
    ['@docusaurus/plugin-ideal-image', {
      quality: 70,
      max: 1030, // max resized image's size.
      min: 640, // min resized image's size. if original is lower, use that size.
      steps: 2, // the max number of images generated between min and max (inclusive)
    }]
  ],
};
