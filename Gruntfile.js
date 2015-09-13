module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
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
            options: {
                style: 'expanded'
            },
            dist: {
                files: {
                    'dist/rocks.css': 'src/rocks.scss'
                }
            }
        },
        sassdoc: {
            default: {
                src: [ 'src/' ]
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

    grunt.registerTask('default', [ 'scsslint', 'sass', 'sassdoc', 'postcss:dist' ]);
};