define(function() {

var routes = {

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
