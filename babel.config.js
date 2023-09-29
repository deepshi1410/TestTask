module.exports = {
  presets: [
    '@vue/app',
    [
      '@vue/cli-plugin-babel/preset',
      {
        targets: { esmodules: true },
        polyfills: []
      }
    ]
  ]
}
