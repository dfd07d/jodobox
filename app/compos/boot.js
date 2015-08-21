require([
    "angular",
    "./app"
], function( angular, app ) {

    require([
        "angular/route",
        "angular/cookies"
    ], function() {
        var doc = angular.element( document )

        doc.ready(function () {
            angular.bootstrap( document, [ app ] )
        })
    })

})
