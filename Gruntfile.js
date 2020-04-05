'use strict';
module.exports = function(grunt) {
  grunt.initConfig({
    concat: {
      js: {
        src: ['assets/js/jquery.js', 'assets/js/pace.js', 'assets/js/wow.min.js', 'assets/js/slick.min.js', 'assets/js/typed.min.js','assets/js/main.js','assets/js/scroll-to-top.js'],
        dest: 'assets/js/scripts.js',  
      },
    },
    sass: {
      dist: {
        options: {
          style: 'compressed',
          compass: false,
          sourcemap: false
        },
        files: {
          'build/css/app.min.css': [
              'assets/sass/app.scss'
          ]
        }
      }
    },
    uglify: {
      dist: {
        files: {
          'build/js/app.min.js': [
            'assets/js/scripts.js'
          ]
        },
        options: {
          sourceMap: 'build/js/app.min.js.map',
          sourceMappingURL: 'build/js/app.min.js.map'
        }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      sass: {
        files: [
          'assets/sass/**/*.scss'
        ],
        tasks: ['sass']
      },
      js: {
        files: [
          'assets/js/**/*.js'
        ],
        tasks: ['concat','uglify']
      },
      html: {
        files: [
          '**/*.html'
        ]
      }
    },
    clean: {
      dist: [
        'build/css/app.min.css',
        'build/js/app.min.js'
      ]
    }
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Register tasks
  grunt.registerTask('default', [
    'clean',
    'concat',
    'sass',
    'uglify'
  ]);
  grunt.registerTask('dev', [
    'watch'
  ]);

};