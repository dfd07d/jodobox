define([
    "angular",
    "./../http/http"
], function( angular, http ) {

var addon = "jodobox.addon"

angular
.module( addon, [ http ] )

return addon

})
