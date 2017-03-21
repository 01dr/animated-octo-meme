/**
 * Crafted by Aidar Ibatullin <amazing.space.invader@gmail.com>
 * 07.02.17
 */

/* global __DEV__:true */

module.exports = __DEV__
    ? require('./root.dev')
    : require('./root.prod');