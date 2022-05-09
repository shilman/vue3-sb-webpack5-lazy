module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    { directory: '../src/stories', files: '**/*.stories.@(js|jsx|ts|tsx)', titlePrefix: 'Example' },
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/vue3',
  core: {
    // builder: '@storybook/builder-webpack5',
    builder: {
      name: 'webpack5',
      options: {
        lazyCompilation: true,
      },
    },
  },
  features: {
    storyStoreV7: true,
    previewMdx2: true,
  },
};
