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
            var str = (function() {/*
       _           __      __
      (_)___  ____/ /___  / /_  ____  _  __
     / / __ \/ __  / __ \/ __ \/ __ \| |/_/
    / / /_/ / /_/ / /_/ / /_/ / /_/ />  <
 __/ /\____/\__,_/\____/_.___/\____/_/|_|
/___/
            */})
            .toString()
            .match(/[^]*\/\*([^]*)\*\/\}$/)[1]

            doc.ready(function () {
                angular.bootstrap( document, [ app ] )
                console.log( "%s \n hello world, jodobox was ready!", str )
            })
        })

    })

})
