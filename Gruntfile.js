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
                options: {stdout: true,
                          failOnError: true}
            },
            sass: {
                command: 'sass css/style.scss css/built/style.css',
                options: {stdout: true,
                          failOnError: true}
            },
            closure_deps: {
                command: 'build/deps.sh',
                options: {stdout: true}
            },
            closure_compile: {
                command: 'build/compile.sh',
                options: {stdout: true}        
            }
        },

        watch: {
            handlebars: {
                files: 'src/templates/*.handlebars',
                tasks: ['shell:handlebars'],
                options: {failOnError: false}
            },
            jade: {
                files: 'src/templates/*.jade',
                tasks: ['jade'],
                options: {failOnError: false}
            },
            sass: {
                files: 'css/*.scss',
                tasks: ['shell:sass'],
                options: {failOnError: false}
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
    grunt.loadNpmTasks('grunt-contrib-watch');

    // jade compiler oddly gives anonymous fn, this gives handle to that fn
    grunt.registerTask('jade', 'Build the templates', function (inputFile) {
        var config = grunt.config.get ('jade');
        var outputFile = config.outputFile;
        jade = require ('jade');
        
        //var runtime = fs.readFileSync ('node_modules/jade/runtime.js');
        //fs.writeFileSync (outputFile, runtime);

        var task = this;
        var inputFiles = grunt.file.expand(config.inputDir+"/*.jade");

        // Check to see if jade templates are defined: Don't clobber templates that 
        // have been brought in
        fs.writeFileSync(outputFile, '\nif (jade.templates === undefined) jade.templates = {};\n;');

        var finished = 0;

        inputFiles.forEach(function (filename, i) {
            var buffer = fs.readFileSync(filename);

            var fn = jade.compile(buffer, {
                client: true
            });

            var done = task.async();

            // get basefilename sans .jade
            exec('basename ' + filename + ' .jade', function (error, stdout, stderr) {
                if (error !== null)
                    done(false);
                var jt = '\njade.templates[\'' + stdout.trim () + '\'] = ';
                jt += fn.toString() + ';';

                fs.appendFileSync(outputFile, jt);
                finished ++;
                if (finished == inputFiles.length)
                    done(true);
            });
        });
    });


    // Default task(s).
    grunt.registerTask('default', ['shell','jade']);
};
