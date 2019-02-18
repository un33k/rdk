module.exports = function(api) {
  api.cache.forever();
  const isTest = process.env.NODE_ENV === 'test';

  const presets = [
    ['@babel/preset-env',
    {
      targets: {
        esmodules: !isTest
      }
    }],
    '@babel/preset-react',
    ['@babel/typescript', { isTSX: true, allExtensions: true }]
  ];

  const plugins = [
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-transform-runtime',
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true
      }
    ]
  ];

  if (isTest) {
    plugins.push('./config/jest/babel-plugin-use-lodash');
  }

  return {
    presets,
    plugins
  };
};