const path = require('path');

module.exports = {
  stories: ['../src/components/**/*.stories.tsx'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-actions'],
  framework: '@storybook/react',
  webpackFinal: async (config) => {
    // パスエイリアス解決用
    config.resolve.alias['@'] = path.resolve(__dirname, '../src');

    // emotion用
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: 'babel-loader',
      options: {
        presets: ['@emotion/babel-preset-css-prop'],
      },
    });

    return config;
  },
};
