define([
    "angular",
    "./../http/http",
    "./route",
    "./boot",
    "./ctrl/index",
    "./ctrl/show",
    "./ctrl/new"
], function( angular, http, route, boot, boxIndexCtrl, boxCtrl, newBoxCtrl ) {

var box = "jodobox.box"

angular
.module( box, [ http ] )
.config( route )
.run( boot )
.controller( "boxIndexCtrl", boxIndexCtrl )
.controller( "boxCtrl", boxCtrl )
.controller( "newBoxCtrl", newBoxCtrl )

return box

})
