module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            mobileCommon: './src/common',
            assets: './assets',
            config: './config',
            components: './src/components',
            navigation: './src/navigation',
            screens: './src/screens'
          },
        },
      ],
    ]
  };
};
