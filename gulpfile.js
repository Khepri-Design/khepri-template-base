const { src, dest, watch} = require('gulp');
const minifyJs = require('gulp-uglify');
const compileSass = require('gulp-sass')(require('node-sass'));
const minifyCss = require('gulp-clean-css');
const sourceMaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');

const jsFiles = ['./assets/js/initial.js', './site/plugins/khepri-base/assets/khepri-icons-kit/khepri-icons.js', './site/plugins/khepri-base/assets/js/*.js', './assets/js/**/*.js'];
const jsBundle = () => {
    return src(jsFiles, { allowEmpty: true })
        .pipe(sourceMaps.init())
        .pipe(minifyJs())
        .pipe(concat('all.min.js'))
        .pipe(sourceMaps.write())
        .pipe(dest('./site/plugins/khepri-base/assets/js/min/'));
};

const sassFiles = ['./assets/scss/initial.scss', './site/plugins/khepri-base/assets/scss/style.scss', './site/plugins/khepri-base/assets/scss/panel.scss', './assets/scss/custom.scss'];
const sassBundle = () => {
    return src(sassFiles, { allowEmpty: true })
        .pipe(sourceMaps.init())
        .pipe(compileSass().on('error', compileSass.logError))
        .pipe(sourceMaps.write())
        .pipe(dest('./site/plugins/khepri-base/assets/css/'))
};

const cssFiles = ['./assets/css/initial.css', './site/plugins/khepri-base/assets/css/aos.css', './site/plugins/khepri-base/assets/khepri-icons-kit/khepri-icons.css', './site/plugins/khepri-base/assets/css/bootstrap.min.css', './site/plugins/khepri-base/assets/css/fontawesome.css', './site/plugins/khepri-base/assets/css/*.css', './assets/css/**/*.css'];
const cssBundle = () => {
    return src(cssFiles, { allowEmpty: true })
        .pipe(sourceMaps.init())
        .pipe(minifyCss())
        .pipe(concat('all.min.css'))
        .pipe(sourceMaps.write())
        .pipe(dest('./site/plugins/khepri-base/assets/css/min/'));
};

const assetsWatch = () => {
    watch('./assets/js/**/*.js', jsBundle);
    watch('./site/plugins/khepri-base/assets/js/*.js', jsBundle);
    watch('./assets/scss/**/*.scss', sassBundle);
    watch('./site/plugins/khepri-base/assets/scss/**/*.scss', sassBundle);
    watch('./assets/css/**/*.css', cssBundle);
    watch('./site/plugins/khepri-base/assets/css/*.css', cssBundle);
};

exports.jsBundle = jsBundle;
exports.sassBundle = sassBundle;
exports.cssBundle = cssBundle;
exports.assetsWatch = assetsWatch;