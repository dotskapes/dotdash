module.exports = function (grunt) {
    var exec = require('child_process').exec;
    var fs = require('fs');

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jade: {
            inputDir: 'src/templates/',
            outputFile: "built/compiled_jade.js"
        },

        shell: {
            handlebars: {
                command: 'node_modules/handlebars/bin/handlebars src/templates/ -f src/templates/compiled.js'
            },
            lint: {
                command: 'node_modules/jshint/bin/jshint --reporter build/jshint_reporter.js src',
                stdout: true,
                failOnError: true
            },
            sass: {
                command: 'sass css/style.scss css/built/style.css',
                stdout: true,
                failOnError: false
            }
        },

        watch: {
            scripts: {
                files: 'src/templates/*.handlebars',
                tasks: ['shell:handlebars']
            },
            sass: {
                files: 'css/*.scss',
                tasks: ['shell:sass']
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

    // jade compiler oddly gives anonymous fn, this gives handle to that fn
    grunt.registerTask('jade', 'Build the templates', function (inputFile) {
        var config = grunt.config.get ('jade');
        var outputFile = config.outputFile;
        jade = require ('jade');

        var runtime = fs.readFileSync ('node_modules/jade/runtime.js');
        fs.writeFileSync (outputFile, runtime);

        var task = this;
        var inputFiles = grunt.file.expand(config.inputDir+"/*.jade");

        inputFiles.forEach (function (filename, i) {
            var buffer = fs.readFileSync (filename);
            var fn = jade.compile (buffer, {
                client: true
            });
            var done = task.async ();

            exec ('basename ' + filename + ' .jade', function (error, stdout, stderr) {
                var jt = "jade.templates = {}; \
                  jade.templates[\'' + stdout.trim () + '\'] = ' + fn.toString () + ';"
                fs.appendFileSync (outputFile, jt);
                done (error === null);
            });
        });
    });


    // Default task(s).
    grunt.registerTask('default', ['shell','jade']);
};
