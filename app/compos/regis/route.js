define(function() {

var routes = {
    "/signup": {
        templateUrl: "compos/regis/tpl/signup.html",
        controller: "signupCtrl as ctrl",
        bindToController: true
    },

    "/signin": {
        templateUrl: "compos/regis/tpl/signin.html",
        controller: "signinCtrl as ctrl",
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
