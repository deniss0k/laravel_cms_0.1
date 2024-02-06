$(function() {

    "use strict";

    /**
    * Magnifier
    * Docs: https://github.com/mark-rolich/Magnifier.js
    */

    var evt = new Event(),
        m = new Magnifier(evt);

    m.attach({
        thumb: '.magnifier__thumb',
        largeWrapper: "magnifier-preview",
        zoom: 3,
        zoomable: true
    });

});

