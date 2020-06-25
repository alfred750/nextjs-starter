const path = require('path');
const withPlugins = require('next-compose-plugins');
const nextCss = require('@zeit/next-css')
const nextSass = require('@zeit/next-sass')
const nextPWA = require('next-pwa')
const nextIntl = require('@moxy/next-intl/plugin');

const nextConfig = {
  webpack: (config, { dev }) => {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
        },
      },
    });
/*
    if (dev) {
      config.module.rules.push({
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          configFile: path.resolve('.eslintrc.json'),
          // eslint options (if necessary)
          emitWarning: dev,
          failOnError: true,
        },
      });
    }
*/
    return config;
  },
};

module.exports = withPlugins([
  nextCss,
  nextSass,
  [nextPWA, {
    pwa: {
      dest: 'public',
      disable: process.env.NODE_ENV === 'development',
    },
  }],
], nextIntl()({ ...nextConfig}))
