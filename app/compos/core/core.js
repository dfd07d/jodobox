define([
    "angular",
    "./cong"
], function( angular, cong ) {

var core = "jodobox.core"

angular
.module( core, [ "ngRoute", "ngCookies" ] ) // `angular-route` and `angular-cookies` was already loaded in ./compos/boot.js
.config( cong )

return core

})
