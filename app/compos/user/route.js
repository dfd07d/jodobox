define(function() {

var routes = {
    "/profile": {
        templateUrl: "compos/user/tpl/show.html",
        controller: "userCtrl",
        bindToController: true
    }
}

return [
    "$routeProvider",
    function( $routeProvider ) {
        angular.forEach( routes, function( route, path) {
            $routeProvider.when( path, route )
        })
    }
]

})
