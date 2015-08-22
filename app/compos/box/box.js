define([
    "angular",
    "./../http/http",
    "./route",
    "./boot",
    "./ctrl/index",
    "./ctrl/show",
    "./ctrl/new",
    "./dir/list",
    "./dir/item",
    "./dir/show"
], function( angular, http, route, boot, boxIndexCtrl, boxCtrl, newBoxCtrl,
        boxList, boxItem, boxShow ) {

var box = "jodobox.box"

angular
.module( box, [ http ] )
.config( route )
.run( boot )
.controller( "boxIndexCtrl", boxIndexCtrl )
.controller( "boxCtrl", boxCtrl )
.controller( "newBoxCtrl", newBoxCtrl )
.directive( "boxList", boxList )
.directive( "boxItem", boxItem )
.directive( "boxShow", boxShow )

return box

})
