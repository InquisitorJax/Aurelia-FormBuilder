/**
 * Created by malcolmj on 6/29/2016.
 */
import {Aurelia} from 'aurelia-framework';

export function configure(aurelia: Aurelia) {
    aurelia.use
        .standardConfiguration()
        .developmentLogging()
        .plugin('aurelia-animator-css');
    aurelia.start().then(() => aurelia.setRoot());
}