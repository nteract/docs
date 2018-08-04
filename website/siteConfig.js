/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config.html for all the possible
// site configuration options.

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/nteract_logo_compact_clear_space_red.svg',
    infoLink: 'https://nteract.io',
    pinned: true,
  },
];

const siteConfig = {
  title: 'Documentation' /* title for your website */,
  tagline: 'nteract and you',
  url: 'https://docs.nteract.io' /* your website url */,
  baseUrl: '/' /* base url for your project */,
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'docs-nteract',
  organizationName: 'nteract',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { doc: 'installation', label: 'Documentation' },
    { href: 'https://components.nteract.io', label: 'Components' },
    { external: true },
    { href: 'https://github.com/nteract/user-guide', label: 'GitHub' }
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/nteract_logo_app_icon_red.png',
  footerIcon: 'img/nteract_logo_app_icon_red.png',
  favicon: 'img/favicon-32x32.png',

  /* colors for website */
  colors: {
    primaryColor: '#334865',
    secondaryColor: '#205C3B',
  },

  /* custom fonts for website */
  /*fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },*/

  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' nteract',

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: "default",
  },

  // Add custom scripts here that would be placed in <script> tags
  scripts: [
    "https://buttons.github.io/buttons.js",
    "https://unpkg.com/clipboard@2.0.0/dist/clipboard.min.js",
    "/js/code-blocks-buttons.js",
  ],

  /* On page navigation for the current documentation page */
  onPageNav: 'separate',

  /* Open Graph and Twitter card images */
  ogImage: 'img/nteract_logo_app_icon_red.png',
  twitterImage: 'img/nteract_logo_app_icon_red.png',

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
