module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['ru'],
    defaultLocale: 'ru',
  },
  async rewrites() {
    return [
      {
        source: '/:category',
        destination: '/',
      },
    ];
  },
}
