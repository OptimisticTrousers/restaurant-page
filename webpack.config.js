const path = require('path');

module.exports = {
    entry: ['./src/index.js', './src/page-load.js', './src/pages/home.js', './src/pages/menu.js', './src/pages/contact-us.js'],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
}