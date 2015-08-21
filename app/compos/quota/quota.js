define([
    "angular",
    "./../http/http"
], function( angular, http ) {

var quota = "jodobox.quota"

angular
.module( "jodobox.quota", [ http ] )

return quota

})
