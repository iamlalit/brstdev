// module.exports = function(grunt) {

//     // Project configuration.
//     grunt.initConfig({
//         pkg: grunt.file.readJSON('package.json'),
//         uglify: {
//             options: {
//                 banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
//             },
//             build: {
//                 src: 'src/<%= pkg.name %>.js',
//                 dest: 'build/<%= pkg.name %>.min.js'
//             }
//         },
//         sass: {
//             development: {
//                 options:{
//                     style: 'expanded',
//                     sourcemap: 'inline',
//                     compass: true,
//                     noCache: true
//                 },
//                 files: {
//                     "./app/css/main.css" : "./app/scss/_bootstrap.scss",
//                     "app/css/compass.css" : "app/scss/_bootstrap-compass.scss",
//                     "app/css/mincer.css" : "app/scss/_bootstrap-mincer.scss",
//                     "app/css/sprockets.css" : "app/scss/_bootstrap-sprockets.scss"
//                 }
//             },
//             production: {
//                 options: {
//                     style: 'compressed',
//                     compass: true,
//                     noCache: true
//                 },
//                 files: {
//                     "app/css/main.css": "app/scss/_bootstrap.scss",
//                     "app/css/compass.css" : "app/scss/_bootstrap-compass.scss",
//                     "app/css/mincer.css" : "app/scss/_bootstrap-mincer.scss",
//                     "app/css/sprockets.css" : "app/scss/_bootstrap-sprockets.scss"
//                 }
//             }
//         },
//         watch: {
//             sass: {
//                 // Which files to watch (all .scss files recursively in the less directory)
//                 files: ['app/scss/{,*/}*.{scss,sass}'],
//                 tasks: ['sass:development']
//                 /*,
//                 options: {
//                     reload: true,
//                     spawn: false
//                 }*/
//             }
//         }
//     });

//     //grunt plugins
//     grunt.loadNpmTasks('grunt-contrib-uglify');
//     grunt.loadNpmTasks('grunt-contrib-sass');
//     grunt.loadNpmTasks('grunt-contrib-watch');

//     // Default task(s).
//     grunt.registerTask('build', ['sass:production']);
//     //grunt.registerTask('watch', ['sass:development']);
//     grunt.registerTask('default', ['build']);

// };

'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    //require('time-grunt')(grunt);

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
              '.tmp/styles/main.css': '<%= config.app %>/scss/_bootstrap.scss',
              '.tmp/styles/app.css': '<%= config.app %>/scss/demo.scss'
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
            //'lib/angular/angular.js',
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
              '<%= config.app %>/scripts/main.js'
              
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
