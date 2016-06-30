/**
 * Created by malcolmj on 6/29/2016.
 */
module.exports = {
    "bundles": {
        "dist/app-build": {
            "includes": [
                "[**/*.js]",
                "**/*.html!text",
                "**/*.css!text"
            ],
            excludes: [
                "config.js" // So wildcard globbing doesn't include this config file
            ],
            "options": {
                "inject": true,
                "minify": true,
                "depCache": true,
                "rev": true
            }
        },
        "dist/aurelia": {
            "includes": [
                "aurelia-bootstrapper",
                "aurelia-framework"
            ],
            "options": {
                "inject": true,
                "minify": true,
                "depCache": true,
                "rev": true
            }
        }
    }
};
