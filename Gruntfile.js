'use strict'

module.exports = function (grunt) {
  grunt.initConfig({
    standard: {
      all: {
        src: [
          'Gruntfile.js',
          'tasks/*.js'
        ]
      }
    }
  })

  grunt.loadNpmTasks('grunt-standard')

  grunt.registerTask('default', ['standard'])
}
