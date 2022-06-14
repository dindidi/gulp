const gulp = import('gulp')
const concat = import('gulp-concat')
const cssmin = import('gulp-cssmin')
const rename = import('gulp-rename')
const uglify = import('gulp-uglify')
const image = require('gulp-imagemin')


function tarefasCSS(cb) {

    return gulp.src('./vendor/**/*.css')
        .pipe(concat('libs.css'))
        .pipe(cssmin())
        .pipe(rename({ suffix: '.min'}))
        .pipe(gulp.dest('./dist/css'))


}

function tarefasJS(){
    
    return gulp.src('./vendor/**/*.js')

         .pipe(concat('libs.js'))
         .pipe(uglify())
         .pipe(rename({ suffix: '.min'}))
         .pipe(gulp.dest('./dist/js'))
}

function tarefasImagem(){
    
    return gulp.src('./src/images/*')
         .pipe(image({
             pngquant: true,
             optipng: false,
             zopRecompress: false,
             mozjpeg: true,
             mozjpeg: true,
             gifsicle: true,
             svgo: true,
             concurrent: 10,
             quiet: true
         }))
         .pipe(gulp.dest('./dist/images'))

}

exports.styles = tarefasCSS
exports.scripts = tarefasJS
exports.images = tarefasImagem
