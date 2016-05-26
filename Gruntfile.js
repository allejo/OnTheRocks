module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        combine_mq: {
            dist: {
                expand: true,
                cwd: 'dist',
                src: '*.css',
                dest: 'dist/'
            }
        },
        postcss: {
            options: {
                map: {
                    inline: false,
                    annotation: 'dist/maps/'
                },
                processors: [
                    require('autoprefixer')({
                        browsers: 'last 2 versions'
                    }),
                    require('cssnano')()
                ]
            },
            dist: {
                src: 'dist/*.css'
            }
        },
        sass: {
            debug: {
                options: {
                    outputStyle: 'expanded'
                },
                files: {
                    'dist/rocks.css': 'src/rocks.scss'
                }
            },
            dist: {
                options: {
                    outputStyle: 'compressed'
                },
                files: {
                    'dist/rocks.css': 'src/rocks.scss'
                }
            }
        },
        sassdoc: {
            default: {
                src: [ 'src/modules/' ]
            }
        },
        scsslint: {
            allFiles: [
                'src/**/*.scss'
            ],
            options: {
                config: '.scss-lint.yml'
            }
        },
        watch: {
            docs: {
                files: [ 'src/**/*.scss' ],
                tasks: [ 'sassdoc' ],
                options: {
                    livereload: false
                }
            },
            styles: {
                files: [
                    'src/**/*.scss'
                ],
                tasks: [ 'sass' ]
            }
        }
    });

    grunt.registerTask('dist', [ 'scsslint', 'sass:dist', 'sassdoc', 'combine_mq', 'postcss:dist' ]);
    grunt.registerTask('debug', [ 'sass:debug', 'combine_mq' ]);

    grunt.registerTask('default', [ 'dist' ]);
};
