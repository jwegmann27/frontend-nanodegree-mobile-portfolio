"use strict";

module.exports = function(grunt) {

grunt.initConfig({
   uglify: {
      my_target: {
        files: {
          'dest/processed-code/index.min.html': ['src/index.html']
        }
      }
    }

    imagemin: {
    dynamic: {
        files: [{
            expand: true,
            cwd: 'img/',
            src: ['**/*.{png,jpg,gif}'],
            dest: 'img/compressed-images/'
        }]
      }
    }
});//end of initConfig

grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.loadNpmTasks('grunt-contrib-uglify');//loads the given task
grunt.registerTask('default', ['uglify','imagemin']);//default grunt tasks maps to grunt
};