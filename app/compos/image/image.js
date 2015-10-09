define([
    "./../http/http",
    "./router",
    "./ctrl/index",
    "./ctrl/show",
    "./ctrl/deploy"
], function( http, router, iCtrl, sCtrl, dCtrl ) {

var image = "jodobox.image"

angular
.module( image, [ http ] )
.config( router )
.controller( "imageIndexCtrl", iCtrl )
.controller( "imageCtrl", sCtrl )
.controller( "deployImageCtrl", dCtrl )

return image

})
