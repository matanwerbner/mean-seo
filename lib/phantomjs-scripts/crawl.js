'use strict';

/**
 * Module dependencies
 */
var page = require("webpage").create(),
    system = require('system'),
    url = system.args[1];

page.onError = function(msg, trace) {
  
};

page.open(encodeURI(url), function(status) {
    // If PhantomJS successfully crawled
    if (status !== "success") {
        console.log("===! Unable to access network\n");
    } else {
        console.log(page.content);
    }

    // Exiting PhantomJS process
    phantom.exit();
});
