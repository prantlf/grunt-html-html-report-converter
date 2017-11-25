'use strict'

const fs = require('fs')
const path = require('path')

function compare (test, source, target) {
  test.expect(1)
  const expected = fs.readFileSync(path.join(__dirname, 'expected',
            source), 'utf-8')
  const actual = fs.readFileSync(path.join(__dirname, 'actual',
            target), 'utf-8')
  test.equal(expected, actual)
  test.done()
}

exports['htmllint-html-report-converter'] = {
  deprecated: function (test) {
    compare(test, 'report.html', 'deprecated.html')
  },

  directory: function (test) {
    compare(test, 'report.html', 'report.html')
  },

  extension: function (test) {
    compare(test, 'report.html', 'report.htm')
  }
}
