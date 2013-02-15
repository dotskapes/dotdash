module.exports = function(grunt) {


  // Project configuration.
  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

       shell: {
          handlebars: {
              command: 'node_modules/handlebars/bin/handlebars src/templates/* -f src/templates/compiled.js'
          }
      }

/*    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> *//*\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }*/
  });

    grunt.loadNpmTasks('grunt-shell');

    // Default task(s).
    grunt.registerTask('default', ['shell']);
};
