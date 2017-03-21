/**
 * Crafted by Aidar Ibatullin <amazing.space.invader@gmail.com>
 * 08.02.17
 */

const path = require('path');

module.exports = {
    plugins: [
        require('postcss-import')({}),
        require('postcss-cssnext')({}),
        require('postcss-browser-reporter')({})
    ]
}