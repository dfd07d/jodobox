define([
    "angular",
    "./../http/http"
], function( angular, http ) {

var apl = "jodobox.apl"

angular
.module( apl, [ http ] )

return apl

})
