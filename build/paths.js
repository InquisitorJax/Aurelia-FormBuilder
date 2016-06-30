/**
 * Created by malcolmj on 6/29/2016.
 */

var appRoot = 'src/';
var outputRoot = 'dist/';
var styles = 'styles/';

module.exports = {
    root: appRoot,
    sass: appRoot + '**/*.scss',
    source: appRoot + '**/*.ts',
    html: appRoot + '**/*.html',
    output: outputRoot,
    css:  styles + '**/*.css',
    sass:  styles + '**/*.scss',
    doc: './doc',
    dtsSrc: [
        './typings/**/*.d.ts',
        './custom_typings/**/*.d.ts'
    ]
};
