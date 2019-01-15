export const imports = {
  'pages/best_practicies.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "pages-best-practicies" */ 'pages/best_practicies.mdx'),
  'pages/guidelines.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "pages-guidelines" */ 'pages/guidelines.mdx'),
}
