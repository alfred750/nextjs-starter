const path = require('path');
const withPlugins = require('next-compose-plugins');
const withCss = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withPWA = require('next-pwa');
const withIntl = require('@moxy/next-intl/plugin');

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

    if (dev) {
      config.module.rules.push({
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          failOnError: true,
        },
      });
    }

    return config;
  },
};

module.exports = withPlugins([
  [withCss, {}],
  [withSass, {}],
  [withIntl(), {}],
  [withPWA, {
    pwa: {
      dest: 'public',
      disable: process.env.NODE_ENV === 'development',
    },
  }],
], nextConfig);
