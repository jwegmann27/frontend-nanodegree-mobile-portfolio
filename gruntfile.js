//"use strict";
//the line below is the wrapper function which encapsulates your grunt config.
module.exports = function(grunt) {
//intializes our config object
grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),
  
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
grunt.registerTask('default', ['imagemin']);//default grunt tasks maps to grunt
};