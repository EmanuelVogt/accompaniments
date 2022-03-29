module.exports = function (api) {
  api.cache(true)
  return {
    presets: [['babel-preset-expo', { jsxRuntime: 'automatic' }]],
    plugins: ['@babel/transform-react-jsx-source', 'babel-plugin-transform-typescript-metadata']
  }
}
