module.exports = function(grunt){
    
    grunt.initConfig({
      concat: {
        js: {
          src: ['assets/js/jquery.js', 'assets/js/pace.js', 'assets/js/wow.min.js', 'assets/js/slick.min.js', 'assets/js/typed.min.js','assets/js/main.js','assets/js/scroll-to-top.js'],
          dest: 'build/js/scripts.js',  
        },
        css: {
          src: ['assets/css/fonts.css', 'assets/css/style.css', 'assets/css/slick.css'],
          dest: 'build/css/styles.css',
        },
      },
      watch: {
      js: {
        files: ['assets/js/*.js'],
        tasks: ['concat'],
      },
      css: {
        files: ['assets/css/*.css'],
        tasks: ['concat'],
      },
      minjs: {
        files: ['build/js/scripts.js'],
        tasks: ['uglify'],
      },
      mincss: {
        files: ['build/css/styles.css'],
        tasks: ['cssmin'],
      },
    },
    // minify js configuration. - grunt uglify
      uglify: {
        minifyscripts: {
          files: {
            'build/js/scripts.min.js': ['build/js/scripts.js'],
          }
        }
      },
    // minify css configuration. - grunt cssmin
    cssmin: {
      minifystyles: {
        files: [{
          expand: true,
          cwd: 'build/css',
          src: ['styles.css'],
          dest: 'build/css',
          ext: '.min.css'
        }]
      }
    }
//above this    
    });
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default',['concat','uglify','cssmin','watch']);
}