// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'debevet Handbuch',
    url: 'https://debevet.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/debevet.svg',
    trailingSlash: false,
    plugins: [
        [
            require.resolve("@cmfcmf/docusaurus-search-local"),
            {
                indexBlog: true,
                indexPages: false,
                language: "de",
            },
        ],
    ],

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'around-pet', // Usually your GitHub org/user name.
    projectName: 'debevet-documentation', // Usually your repo name.
    deploymentBranch: 'debevet-documentation',

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
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
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: 'debevet Handbuch',
                logo: {
                    alt: 'Debevet Logo',
                    src: 'img/debevet_super.svg',
                },
                items: [
                    {
                        type: 'doc',
                        docId: 'intro',
                        position: 'left',
                        label: 'Handbuch',
                    },

                    {
                        href: 'https://app.debevet.de/',
                        label: 'zu meinem Account',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Links',
                        items: [
                            {
                                label: 'Debevet Hauptseite',
                                to: 'https://www.debevet.de',
                            },
                        ],
                    },
                    {
                        title: 'Impressum',
                        items: [
                            {
                                label: 'Impressum',
                                href: 'https://www.debevet.de/impressum/',
                            },
                        ],
                    }
                ],
                copyright: `Copyright © ${new Date().getFullYear()} around.pet Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
