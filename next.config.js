const withPlugins = require('next-compose-plugins');
const nextCss = require('@zeit/next-css')
const nextSass = require('@zeit/next-sass')
const nextPWA = require('next-pwa')
const nextIntl = require('@moxy/next-intl/plugin');

const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000
        }
      }
    });
    return config;
  }
}

module.exports = withPlugins([
  nextCss,
  nextSass,
  [nextPWA, {
    pwa: {
      dest: 'public',
      disable: process.env.NODE_ENV === 'development',
    }
  }],
], nextIntl()({ ...nextConfig}))

