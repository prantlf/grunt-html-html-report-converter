'use strict'

const fs = require('fs')
const path = require('path')

function compare (test, source, target, directory) {
  test.expect(1)
  const expected = fs.readFileSync(path.join(__dirname, 'expected',
            source), 'utf-8')
  const actual = fs.readFileSync(path.join(__dirname,
            directory || 'actual', target), 'utf-8')
  test.equal(expected, actual)
  test.done()
}

exports['htmllint-html-report-converter'] = {
  deprecated: function (test) {
    compare(test, 'full-path.html', 'deprecated.html')
  },

  directory: function (test) {
    compare(test, 'full-path.html', 'report.html')
  },

  extension: function (test) {
    compare(test, 'full-path.html', 'report.htm')
  },

  showFileNameOnly: function (test) {
    compare(test, 'name-only.html', 'report.html', 'extra')
  },

  'unreported-json': function (test) {
    test.expect(2)
    const json = fs.statSync(path.join(__dirname, 'extra', 'missing.json'))
    test.ok(json)
    test.ok(json.size > 0)
    test.done()
  },

  unreported: function (test) {
    compare(test, 'unreported.html', 'unreported.html')
  }
}
