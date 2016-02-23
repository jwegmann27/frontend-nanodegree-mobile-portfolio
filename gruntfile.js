'use strict'

module.exports = function(grunt) {

grunt.initConfig({
   uglify: {
      my_target: {
        files: {
          'dest/processed-code/index.min.html': ['src/index.html']
        }
      }
    }
});//end of initConfig

grunt.loadNpmTasks('grunt-contrib-uglify');//loads the given task
grunt.registerTask('default', ['uglify']);//default grunt tasks maps to grunt
};