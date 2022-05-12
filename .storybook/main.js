const path = require("path");
const pathToInlineSvg = path.resolve(__dirname, '../src/components/Logo');

// Export a function. Accept the base config as the only param.
module.exports = {
  framework: "@storybook/react",
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/**/stories.@(js|jsx|ts|tsx)",
    "../src/**/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  staticDirs: ['../public'],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
  ],

  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },

  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    const fileLoaderRule = config.module.rules.find(rule => rule.test.test('.svg'));
    fileLoaderRule.exclude = pathToInlineSvg;
    
    config.module.rules.push({
      test: /\.svg$/,
      include: pathToInlineSvg,
      use: [{
        loader: '@svgr/webpack',
        options: {
          icon: true,
        },
      }],
    });


    // Return the altered config
    return config;
  },
};
