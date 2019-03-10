const GoogleFontsPlugin = require('google-fonts-webpack-plugin')

module.exports = {
  entry: 'index.js',
  plugins: [
    new GoogleFontsPlugin({
      fonts: [{ family: 'Rubik', variants: ['300', '300italic', '400', '500'] }]
    })
  ]
}
