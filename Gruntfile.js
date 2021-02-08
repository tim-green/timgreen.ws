'use strict';
module.exports = function(grunt) {
  grunt.initConfig({
    concat: {
      js: {
        src: ['assets/js/jquery.js', 'assets/js/pace.js', 'assets/js/wow.min.js', 'assets/js/slick.min.js', 'assets/js/typed.min.js','assets/js/main.js','assets/js/scroll-to-top.js'],
        dest: 'assets/build/app.min.js',  
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
          'assets/build/app.min.css': [
              'assets/sass/app.scss'
          ]
        }
      }
    },
    uglify: {
      dist: {
        files: {
          'assets/build/app.min.js': [
            'assets/js/scripts.js'
          ]
        },
        options: {
          sourceMap: 'assets/build/app.min.js.map',
          sourceMappingURL: 'assets/build/app.min.js.map'
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
        'ssets/build/app.min.css',
        'assets/build/app.min.js'
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