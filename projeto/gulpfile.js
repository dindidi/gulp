const gulp = import('gulp')
const concat = import('gulp-concat')
const cssmin = import('gulp-cssmin')
const rename = import('gulp-rename')
const uglify = import('gulp-uglify')
const image = import('gulp-image')


function tarefasCSS(_cb) {

    return gulp.src([
        './node_modules/bootstrap/dist/css/bootstrap.css',
        './node_modules/@fortawesome/fontawesome-free/css/fontawesome.css',
        './vendor/owl/css/owl.css',
        './vendor/jquery-ui/jquery-ui.css',
        './src/css/style.css'
    ])
    .pipe(stripCss())                   // remove comentários
    .pipe(concat('styles.css'))         // mescla arquivos
    .pipe(cssmin())                     // minifica css
    .pipe(rename({ suffix: '.min'}))    // styles.min.css
    .pipe(gulp.dest('./dist/css'))      // cria arquivo em novo diretório

}

function tarefasJS(){
    
    return gulp.src([
        './node_modules/jquery/dist/jquery.js',
        './node_modules/bootstrap/dist/js/bootstrap.js',
        './vendor/owl/js/owl.js',
        './vendor/jquery-mask/jquery.mask.js',
        './vendor/jquery-ui/jquery-ui.js',
        './src/js/custom.js'
    ])
    .pipe(stripJs())                    // remove comentários
    .pipe(concat('scripts.js'))         // mescla arquivos
    .pipe(uglify())                     // minifica js
    .pipe(rename({ suffix: '.min'}))    // scripts.min.js
    .pipe(gulp.dest('./dist/js'))       // cria arquivo em novo diretório
}

function tarefaImage(){
    
    return gulp.src('./src/images/*')
    .pipe(image({
        pngquant: true,
        optipng: false,
        zopflipng: true,
        jpegRecompress: false,
        mozjpeg: true,
        gifsicle: true,
        svgo: true,
        concurrent: 10,
        quiet: true
    }))
    .pipe(gulp.dest('./dist/images'))

}

export const styles = tarefasCSS
export const scripts = tarefasJS
const _image = tarefaImage
export { _image as image }
