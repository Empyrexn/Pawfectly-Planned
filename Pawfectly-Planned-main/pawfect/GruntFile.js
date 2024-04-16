module.exports = function(grunt) {
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      sass: {
        dist: {
          files: {
            'src/app.css': 'src/prime.scss'
          }
        }
      },
      concat: {
        dist: {
          src: ['src/js/*.js'],
          dest: 'dist/js/script.js'
        }
      },
  
      uglify: {
        dist: {
          files: {
            'dist/js/script.js': 'src/js/*.js'
          }
        }
      },
  
  
  
      copy: {
        main: {
          src: 'src/index.html',
          dest: 'dist/index.html'
        }
      },
  
      watch: {
        styles: {
          files: ['src/*.scss'],
          tasks: ['sass'],
          options: {
            spawn: true,
          },
        },
        scripts: {
          files: ['src/js/*.js'],
          tasks: ['concat', 'uglify'],
          options: {
            spawn: true,
          },
        },
     
        html: {
          files: ['src/index.html'],
          tasks: ['copy'],
          options: {
            spawn: false,
          },
        },
      },
    });
  
    grunt.loadNpmTasks('grunt-contrib-sass');
  //  grunt.loadNpmTasks('grunt-contrib-uglify');
    //grunt.loadNpmTasks('grunt-contrib-copy');
    //grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
  
    grunt.registerTask('default', ['sass', 'watch']);
  };
  