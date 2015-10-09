define([
    "./cong"
], function( cong ) {

var core = "jodobox.core"

angular
.module( core, [ "ngRoute", "ngCookies" ] )
.config( cong )

return core

})
