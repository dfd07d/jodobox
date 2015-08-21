define([
    "angular",
    "./cong"
], function( angular, cong ) {

var core = "jodobox.core"

angular
// `angular-route` and `angular-cookies` was already loaded in ./compos/boot.js
.module( core, [ "ngRoute", "ngCookies" ] )
.config( cong )

return core

})
