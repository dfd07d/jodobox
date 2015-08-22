;(function() {

"use strict";

require.config({
    paths: {
        "modernizr": "/bower_components/modernizr/modernizr",
        "angular": "/bower_components/angular/angular",
        "angular/route": "/bower_components/angular-route/angular-route",
        "angular/cookies": "/bower_components/angular-cookies/angular-cookies",
        "angular/ui/bs": "/bower_components/angular-bootstrap/ui-bootstrap-tpls"
    },

    shim: {
        angular: {
            exports: "angular"
        }
    },

    deps: ["modernizr", "./boot"]
})

}())
