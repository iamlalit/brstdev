module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },
        sass: {
            development: {
                options:{
                    style: 'expanded',
                    sourcemap: 'inline',
                    compass: true,
                    noCache: true
                },
                files: {
                    "./app/css/main.css" : "./app/scss/_bootstrap.scss",
                    "app/css/compass.css" : "app/scss/_bootstrap-compass.scss",
                    "app/css/mincer.css" : "app/scss/_bootstrap-mincer.scss",
                    "app/css/sprockets.css" : "app/scss/_bootstrap-sprockets.scss"
                }
            },
            production: {
                options: {
                    style: 'compressed',
                    compass: true,
                    noCache: true
                },
                files: {
                    "app/css/main.css": "app/scss/_bootstrap.scss",
                    "app/css/compass.css" : "app/scss/_bootstrap-compass.scss",
                    "app/css/mincer.css" : "app/scss/_bootstrap-mincer.scss",
                    "app/css/sprockets.css" : "app/scss/_bootstrap-sprockets.scss"
                }
            }
        },
        watch: {
            sass: {
                // Which files to watch (all .scss files recursively in the less directory)
                files: ['app/scss/{,*/}*.{scss,sass}'],
                tasks: ['sass:development']
                /*,
                options: {
                    reload: true,
                    spawn: false
                }*/
            }
        }
    });

    //grunt plugins
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('build', ['sass:production']);
    //grunt.registerTask('watch', ['sass:development']);
    grunt.registerTask('default', ['build']);

};