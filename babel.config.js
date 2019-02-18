module.exports = function(api) {
  api.cache.forever();

  const presets = [
    ['@babel/preset-env',
    {
      targets: {
        esmodules: true
      }
    }],
    '@babel/preset-react',
    ['@babel/typescript', { isTSX: true, allExtensions: true }]
  ];

  const plugins = [
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
    '@babel/plugin-syntax-dynamic-import',
    // ß'@babel/plugin-transform-runtime',
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true
      }
    ]
  ];

  return {
    presets,
    plugins
  };
};