module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
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
                    'dist/rocks.css': 'scss/rocks.scss'
                }
            },
            dist: {
                options: {
                    outputStyle: 'compressed'
                },
                files: {
                    'dist/rocks.css': 'scss/rocks.scss'
                }
            },
            tests: {
                options: {
                    outputStyle: 'expanded'
                },
                files: {
                    'dist/true.css': 'tests/tests.scss'
                }
            }
        },
        sassdoc: {
            default: {
                src: [ 'scss/rocks/' ],
                options: {
                    display: {
                        access: [ 'public' ]
                    },
                    basePath: '<%= pkg.repository.url %>/blob/<%= pkg.repository.docsbranch %>/scss/rocks/'
                }
            }
        },
        scsslint: {
            allFiles: [
                'scss/**/*.scss'
            ],
            options: {
                config: '.scss-lint.yml'
            }
        },
        watch: {
            docs: {
                files: [ 'scss/**/*.scss' ],
                tasks: [ 'sassdoc' ],
                options: {
                    livereload: false
                }
            },
            styles: {
                files: [
                    'scss/**/*.scss'
                ],
                tasks: [ 'sass' ]
            }
        }
    });

    grunt.registerTask('dist', [ 'scsslint', 'sass:dist', 'sassdoc', 'combine_mq', 'postcss:dist' ]);
    grunt.registerTask('debug', [ 'sass:debug', 'combine_mq' ]);

    grunt.registerTask('default', [ 'dist' ]);
};
