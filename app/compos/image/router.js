define(function() {

var routes = {
    "/images": {
        templateUrl: "compos/image/tpl/index.html",
        controller: "imageIndexCtrl as ctrl",
        bindToController: true
    },

    "/images/:id": {
        templateUrl: "compos/image/tpl/show.html",
        controller: "imageCtrl as ctrl",
        bindToController: true
    },

    "/images/:id/deploy": {
        templateUrl: "compos/image/tpl/deploy.html",
        controller: "deployImageCtrl as ctrl",
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
