define([
    "angular",
    "./../http/http"
], function( angular, http ) {

var image = "jodobox.image"

angular
.module( image, [ http ] )

return image

})
