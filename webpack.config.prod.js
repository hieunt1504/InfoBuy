const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',

  plugins: [
    /*
     * Trang chủ
     * HtmlWebpackPlugin xử lý index.html
     */
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
    }),

    /*
     * Copy các trang HTML và static assets còn lại
     * sang production output.
     */
    new CopyPlugin({
      patterns: [
        // Các trang InfoBuy
        { from: 'products.html', to: 'products.html' },
        { from: 'product-detail.html', to: 'product-detail.html' },
        { from: 'cart.html', to: 'cart.html' },
        { from: 'checkout.html', to: 'checkout.html' },
        { from: '404.html', to: '404.html' },

        // Assets
        { from: 'img', to: 'img' },
        { from: 'css', to: 'css' },
        { from: 'js/vendor', to: 'js/vendor' },

        // Icons / metadata
        { from: 'icon.svg', to: 'icon.svg' },
        { from: 'icon.png', to: 'icon.png' },
        { from: 'favicon.ico', to: 'favicon.ico' },
        { from: 'robots.txt', to: 'robots.txt' },
        { from: 'site.webmanifest', to: 'site.webmanifest' },
      ],
    }),
  ],
});
