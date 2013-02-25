module.exports = function(grunt) {


  // Project configuration.
  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

       shell: {
          handlebars: {
              command: 'node_modules/handlebars/bin/handlebars src/templates/ -f src/templates/compiled.js'
          }
      },

      lint: {
          all: ["grunt.js", "src/dash.js", "src/controllers/*.js", "src/models/*.js", "src/views/*.js"]
      },
      jshint: {
          options: {
              browser: true,
              devel: true,
              jquery: true,
              bitwise: true,
              camelcase: false,
              curly: true,
              eqeqeq: true,
              forin: true,
              immed: false,
              indent: 4,
              latedef: true,
              newcap: false,
              noarg: true,
              noempty: true,
              nonew: false,
              plusplus: false,
              quotmark: false,
              regexp: true,
              undef: false,
              unused: false,
              strict: false,
              trailing: false,
              maxparams: 10,
              maxdepth: 10,
              maxstatements: 50,
              maxcomplexity: 10,
              maxlen: 200,

              // suppress warnings
              expr: true,
              white: false
          },
          globals: {
              Handlebars: true,
              goog: true,
              wiggle: true
          }
       },

      watch: {
          scripts: {
              files: 'src/templates/*.handlebars',
              tasks: ['shell:handlebars']
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
