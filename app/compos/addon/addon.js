define([
    "./../http/http"
], function( http ) {

var addon = "jodobox.addon"

angular
.module( addon, [ http ] )

return addon

})
