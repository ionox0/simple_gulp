/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    simplemocha: {
      options: {
        timeout: 3000,
        ignoreLeaks: false,
        reporter: 'tap'
      },
      all: { src: ['test/**/*.js'] }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        eqnull: true,
        browser: true,
        globals: {
          require: true,
          describe: true,
          jQuery: true,
          console: true,
          module: true,
          document: true
        },
      },
      all: { src: ['test/**/*.js'] }
    }
  });

  // For this to work, you need to have run `npm install grunt-simple-mocha`
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Add a default task. This is optional, of course :)
  grunt.registerTask('default', 'simplemocha');

};
