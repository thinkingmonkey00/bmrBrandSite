"use strict";

// Load plugins
const autoprefixer = require("autoprefixer");
const browsersync = require("browser-sync").create();
const cp = require("child_process");
const cssnano = require("cssnano");
const del = require("del");
const eslint = require("gulp-eslint");
const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const newer = require("gulp-newer");
const plumber = require("gulp-plumber");
const postcss = require("gulp-postcss");
const rename = require("gulp-rename");
const sass = require("gulp-sass");
const webpack = require("webpack");
const webpackconfig = require("./webpack.config.js");
const webpackstream = require("webpack-stream");

// BrowserSync
function BrowserSync(done) {
  browsersync.init({
    server: {
      baseDir: './'
    },
    port: 3000
  });
  done();
}

// BrowserSync Reload
function BrowserSyncReload(done) {
  browsersync.reload();
  done();
}

// Clean Assets
function clean() {
  return del(['./public/assets/'])
}

// Optimize Images
function images() {
  return gulp
    .src("./assets/img/**/*")
    .pipe(newer("./public/assets/img"))
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.jpegtran({ progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [
            {
              removeViewBox: false,
              collapseGroups: true
            }
          ]
        })
      ])
    )
    .pipe(gulp.dest("./public/assets/img"));
}

// CSS Task
function css() {
  return gulp
    .src('./assets/scss/**/*.scss')
    .pipe(plumber())
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(gulp.dest("./public/assets/css/"))
    .pipe(rename({ suffix: ".min" }))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(gulp.dest("./public/assets/css/"))
    .pipe(browsersync.stream());
}

// Transpile, concatenate and minify scripts
function scripts() {
  return (
    gulp
      .src(["./assets/js/**/*"])
      .pipe(plumber())
      .pipe(webpackstream(webpackconfig, webpack))
      // folder only, filename is specified in webpack config
      .pipe(gulp.dest("./public/assets/js/"))
      .pipe(browsersync.stream())
  );
}

// define complex tasks
const js = gulp.series(scriptsLint, scripts);
const build = gulp.series(clean, gulp.parallel(css, images, js));
const watch = gulp.parallel(watchFiles, browserSync);
