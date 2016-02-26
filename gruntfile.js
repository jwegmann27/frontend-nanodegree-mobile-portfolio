//"use strict";
//the line below is the wrapper function which encapsulates your grunt config.
module.exports = function(grunt) {
//intializes our config object
grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),
  
    uglify: {
      my_target: {
        files: {
          'dest/processed-code/index.min.html': ['index.html']
        }
      }
    },

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