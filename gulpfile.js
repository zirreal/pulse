const { src, dest, series, watch } = require('gulp');

const concat = require('gulp-concat');
const htmlMin = require('gulp-htmlmin');
const fileInclude = require('gulp-file-include');
const rename = require('gulp-rename');
const autoPrefixes = require('gulp-autoprefixer');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const shorthand = require('gulp-shorthand');
const mediaQueries = require('gulp-group-css-media-queries');
const svgSprite = require('gulp-svg-sprite');
const image = require('gulp-image');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const webpHtml = require('gulp-webp-html');
const webpcss = require('gulp-webp-css');
const ttf2woff = require('gulp-ttf2woff');
const ttf2woff2 = require('gulp-ttf2woff2');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify-es').default;
const notify = require('gulp-notify');
const sourceMaps = require('gulp-sourcemaps');
const del = require('del');
const browserSync = require('browser-sync').create();
const clean = () =>  {
    return del(['dist'])
}

const resources = () => {
    return src('src/resources/**')
    .pipe(dest('dist/resources'))
}

const styles = () => {
    return src('src/scss/**/*.scss')
    .pipe(sourceMaps.init())
    .pipe(concat('main.css'))
    .pipe(sass().on("error", notify.onError()))
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(autoPrefixes({
        cascade: false
    }))
    .pipe(shorthand())
    .pipe(mediaQueries())
    .pipe(cleanCSS({
        level: 2
    }))
    .pipe(sourceMaps.write())
    .pipe(dest('dist/css/'))
    .pipe(browserSync.stream())
};

const htmlConcat = () => {
    return src('src/**/*.html')
    .pipe(fileInclude({
        prefix: '@',
        basepath: '@file'
      }))
    .pipe(concat('index.html'))
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
};

const svgSprites = () => {
    return src('src/img/svg/**/*.svg')
    .pipe(svgSprite({
        mode: {
            stack: {
                sprite: '../sprite.svg'
            }
        }
    }))
    .pipe(dest('dist/images'))
}

const fonts = () => {
    src('./src/fonts/**.woff2')
		.pipe(ttf2woff2())
		.pipe(dest('dist/fonts/'))
	return src('./src/fonts/**.woff')
		.pipe(ttf2woff())
		.pipe(dest('dist/fonts/'))
}

const scripts = () => {
    return src([
        'src/js/**/*.js',
        'src/js/main.js',
    ])
    .pipe(sourceMaps.init())
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(concat('main.js'))
    .pipe(uglify({
        toplevel: true,
    }).on('error', notify.onError()))
    .pipe(sourceMaps.write())
    .pipe(dest('dist/js/'))
    .pipe(browserSync.stream())
}

const images = () => {
    return src([
        'src/img/**/*.jpg',
        'src/img/**/*.png',
        'src/img/*.svg',
        'src/img/**/*.jpeg',
    ])
    .pipe(image({}))
    .pipe(dest('dist/img'))
}

const watchFiles = () => {
    browserSync.init({
        server: {
            baseDir: 'dist'
        }
    })
}

watch('src/**/*.html', htmlConcat)
watch('src/scss/**/*.scss', styles)
watch('src/img/svg/**/*.svg', svgSprites)
watch('src/js/**/*.js', scripts)
watch('src/resources/**', resources)
watch('src/fonts/**.ttf', fonts)

exports.clean = clean;
exports.styles = styles;
exports.htmlConcat = htmlConcat;
exports.scripts = scripts;
exports.default = series(clean, resources, htmlConcat, scripts, fonts, styles, images, svgSprites, watchFiles)


const minImages = () => {
    return src([
        'src/img/**/*.jpg',
        'src/img/**/*.png',
        'src/img/*.svg',
        'src/img/**/*.jpeg',
    ])
    .pipe(
        webp({
            quality: 70
        })
    )
    .pipe(imagemin([
        imagemin.gifsicle({interlaced: true}),
        imagemin.mozjpeg({quality: 75, progressive: true}),
        imagemin.optipng({optimizationLevel: 3}),
        imagemin.svgo({
            plugins: [
                {removeViewBox: false},
            ]
        })
    ]))
    .pipe(dest('dist/img'))
}

const stylesBuild = () => {
    return src('src/scss/**/*.scss')
    .pipe(concat('main.css'))
    .pipe(sass().on("error", notify.onError()))
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(autoPrefixes({
        cascade: false
    }))
    .pipe(webpcss())
    .pipe(mediaQueries())
    .pipe(cleanCSS({
        level: 2
    }))
    .pipe(dest('dist/css/'))
};

const scriptsBuild = () => {
    return src([
        'src/js/components/**/*.js',
        'src/js/main.js'
    ])
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(concat('app.js'))
    .pipe(uglify({
        toplevel: true,
    }).on('error', notify.onError()))
    .pipe(dest('dist/js/'))
}

const htmlMinify = () => {
    return src('src/**/*.html')
    .pipe(concat('index.html'))
    .pipe(webpHtml())
    .pipe(htmlMin({
        collapseWhitespace: true,
    }))
    .pipe(dest('dist'))
};

exports.build = series(clean, resources, htmlMinify, scriptsBuild, fonts, stylesBuild, minImages, svgSprites, watchFiles)