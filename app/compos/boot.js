require([
    "angular"
], function( angular ) {

    require([
        "angular/route",
        "angular/cookies"
    ], function() {

        require([ "./app" ], function( app ) {
            var doc = angular.element( document )

            doc.ready(function () {
                angular.bootstrap( document, [ app ] )
            })
        })

    })

})
