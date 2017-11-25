'use strict'

module.exports = function (grunt) {
  grunt.initConfig({
    standard: {
      all: {
        src: [
          'Gruntfile.js',
          'tasks/*.js',
          'tests/*.js'
        ]
      }
    },

    'htmllint-html-report-converter': {
      missingDeprecated: {
        options: {
          ignoreMissing: true
        },
        input: 'tests/expected/dummy.json',
        output: 'tests/actual/'
      },
      missingCurrent: {
        options: {
          ignoreMissing: true
        },
        src: 'tests/expected/dummy.json',
        dest: 'tests/actual/'
      },
      force: {
        options: {
          force: true
        },
        src: 'tests/expected/dummy.json',
        dest: 'tests/actual/'
      },
      deprecated: {
        input: 'tests/expected/report.json',
        output: 'tests/actual/deprecated.html'
      },
      directory: {
        src: 'tests/expected/report.json',
        dest: 'tests/actual/'
      },
      extension: {
        options: {
          targetExtension: '.htm'
        },
        src: 'tests/expected/report.json',
        dest: 'tests/actual/'
      }
    },

    nodeunit: {
      tests: ['tests/*.js']
    },

    clean: {
      tests: ['tests/actual/*']
    }
  })

  grunt.loadTasks('tasks')
  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-contrib-nodeunit')
  grunt.loadNpmTasks('grunt-standard')

  grunt.registerTask('default', ['standard', 'clean',
    'htmllint-html-report-converter', 'nodeunit'])
}
