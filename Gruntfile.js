module.exports = function (grunt) {

    grunt.initConfig({
        copy: {
            main: {
                files: [
                    // includes files within path
                    {
                        expand: true,
                        cwd: 'public/bower_components/',
                        src: [
                            'bootstrap/dist/css/bootstrap.min.css',
                            'select2/dist/css/select2.min.css',
                            'font-awesome/css/font-awesome.min.css'
                        ],
                        dest: 'public/css/vendor',
                        flatten: true
                    },
                    {
                        expand: true,
                        cwd: 'public/bower_components/',
                        src: [
                            'bootstrap/dist/fonts/**',
                            'font-awesome/fonts/**'
                        ],
                        dest: 'public/css/fonts/',
                        flatten: true
                    }
                ]
            }
        },
        'sails-linker': {
            stylePublicSourceLib: {
                options: {
                    startTag: '<!--STYLES LIB-->',
                    endTag: '<!--STYLES LIB END-->',
                    fileTmpl: '<link rel="stylesheet" href="./%s">',
                    appRoot: 'public',
                    relative: true
                },
                files: {
                    'public/index.html':
                    [
                        'public/css/**/*.css'
                    ]
                }
            },
            stylePublicSourceCustom: {
                options: {
                    startTag: '<!--STYLES-->',
                    endTag: '<!--STYLES END-->',
                    fileTmpl: '<link rel="stylesheet" href="./%s">',
                    appRoot: 'public',
                    relative: true
                },
                files: {
                    'public/index.html':
                    [
                        'public/theme/**/*.css',
                    ]
                }
            },
            scriptPublicSourceCustom: {
                options: {
                    startTag: '<!--SCRIPTS-->',
                    endTag: '<!--SCRIPTS END-->',
                    fileTmpl: '<script src="./%s"></script>',
                    appRoot: 'public',
                    relative: true
                },
                files: {
                    // Target-specific file lists and/or options go here.
                    'public/index.html':
                    [
                        'public/theme/**/*.js'
                    ]
                }
            }
        },
        wiredep: {
            task: {
                // Point to the files that should be updated when
                // you run `grunt wiredep`
                src: [
                    'public/index.html',
                ],
                options: {
                    // See wiredep's configuration documentation for the options
                    // you may pass:
                    // https://github.com/taptapship/wiredep#configuration
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-wiredep');
    grunt.loadNpmTasks('grunt-sails-linker');

    grunt.registerTask('default', ['copy', 'wiredep', 'sails-linker']);
};