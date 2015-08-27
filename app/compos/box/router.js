define(function() {

var routes = {
    "/boxes": {
        templateUrl: "compos/box/tpl/index.html",
        controller: "boxIndexCtrl as ctrl",
        bindToController: true
    },

    "/boxes/new": {
        templateUrl: "compos/box/tpl/new.html",
        controller: "newBoxCtrl as ctrl",
        bindToController: true
    },

    "/boxes/:id": {
        templateUrl: "compos/box/tpl/show.html",
        controller: "boxCtrl as ctrl",
        bindToController: true
    }
}

return [
    "$routeProvider",
    function( $routeProvider ) {
        angular.forEach( routes, function( route, path ) {
            $routeProvider.when( path, route )
        })
    }
]

})
