'use strict';

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        config: {
            // Configurable paths
            app: 'app'
        },

        // Watches files for changes and runs tasks based on the changed files
        watch: {
            js: {
                files: ['<%= config.app %>/scripts/**/*.js'],
                tasks: ['concat:appJS'],
                options: {
                    livereload: true
                }
            },
            sass: {
                files: ['<%= config.app %>/scss/{,*/}*.{scss,sass}'],
                tasks: ['sass:compile', 'autoprefixer']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '<%= config.app %>/{,*/}*.html',
                    '.tmp/styles/app.css',
                    '<%= config.app %>/images/{,*/}*'
                ]
            }
        },

        // The actual grunt server settings
        connect: {
            options: {
                port: 9001,
                livereload: 35730,
                // Change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    open: 'http://localhost:9001/index.html',
                    base: [
                        '.tmp',
                        '<%= config.app %>'
                    ]
                }
            }
        },

        // Empties folders to start fresh
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= config.dist %>/*',
                        '!<%= config.dist %>/.git*'
                    ]
                }]
            },
            server: '.tmp'
        },
        //SASS
        sass: {
          compile: {
            options: {
              sourcemap: true,
              loadPath: ['<%= config.app %>/sass']
            },
            files: {
              '.tmp/styles/main.css': '<%= config.app %>/scss/bootstrap.scss',
              '.tmp/styles/app.css': '<%= config.app %>/scss/app.scss'
            }
          }
        },
        // Add vendor prefixed styles
        autoprefixer: {
            options: {
                browsers: ['last 1 version']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/styles/',
                    src: 'main.css',
                    dest: '.tmp/styles/'
                }]
            }
        },

        concat: {
            options: {
              separator: ';',
            },
            //for external libraries
            bowerJS: {
              src: [
              'lib/jquery/dist/jquery.js',
              'lib/angularjs/angular.js',
              'lib/bootstrap-sass-official/assets/javascripts/bootstrap.js',
              'lib/bootstrap-sass-official/assets/javascripts/bootstrap/affix.js',
              'lib/bootstrap-sass-official/assets/javascripts/bootstrap/alert.js',
              'lib/bootstrap-sass-official/assets/javascripts/bootstrap/button.js',
              'lib/bootstrap-sass-official/assets/javascripts/bootstrap/carousel.js',
              'lib/bootstrap-sass-official/assets/javascripts/bootstrap/collapse.js',
              'lib/bootstrap-sass-official/assets/javascripts/bootstrap/dropdown.js',
              'lib/bootstrap-sass-official/assets/javascripts/bootstrap/tab.js',
              'lib/bootstrap-sass-official/assets/javascripts/bootstrap/transition.js',
              'lib/bootstrap-sass-official/assets/javascripts/bootstrap/scrollspy.js',
              'lib/bootstrap-sass-official/assets/javascripts/bootstrap/modal.js',
              'lib/bootstrap-sass-official/assets/javascripts/bootstrap/tooltip.js',
              'lib/bootstrap-sass-official/assets/javascripts/bootstrap/popover.js',
                   ],
              dest: '.tmp/scripts/bower.js',
            },
            //for scripts written by us
            appJS: {
              src: [
              '<%= config.app %>/scripts/app.js',
              '<%= config.app %>/scripts/main.js',
              '<%= config.app %>/scripts/footer.js'
              
                    ],
              dest: '.tmp/scripts/core.js',
            }
        },


        // Run some tasks in parallel to speed up build process
        concurrent: {
            server: [
                'sass:compile',
                'concat:bowerJS',
                'concat:appJS'
            ]
        }
    });


    grunt.registerTask('serve', function (target) {
    
        grunt.task.run([
            'clean:server',
            'concurrent',
            'autoprefixer',
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('build', [
        'concurrent',
        'autoprefixer'
    ]);

    grunt.registerTask('default', [
        'build'
    ]);
};
