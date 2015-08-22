require([
    "angular"
], function( angular ) {

    // require all 3rd party libs before kick start app.
    // these libs depend on `angular`
    require([
        "angular/route",
        "angular/cookies",
        "angular/ui/bs"
    ], function() {

        require([ "./app" ], function( app ) {
            var doc = angular.element( document )

            doc.ready(function () {
                angular.bootstrap( document, [ app ] )
            })
        })

    })

})
