// ./notifier.js
'use strict'

const pkg = require('./package.json')
const notifier = require('node-notifier')

class Notifier {
  constructor(params = { message: '', icon: '' }) {
    if (Object.keys(params).length) {
      this.message = params.message
      this.icon = params.icon
    }
  }

  apply(compiler) {
    compiler.plugin('done', stats => {
      const time = ((stats.endTime - stats.startTime) / 1000).toFixed(2)

      notifier.notify({
        title: pkg.name,
        message: `${this.message || 'Woo Done!'}\n${
          stats.compilation.errors.length
        } errors in ${time}s`,
        contentImage: this.icon || ''
      })
    })
  }
}

module.exports = Notifier
