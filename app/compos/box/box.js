define([
    "angular",
    "./../http/http",
    "./router",
    "./boot",
    "./ctrl/index",
    "./ctrl/show",
    "./ctrl/new",
    "./dir/index",
    "./dir/list",
    "./dir/item",
    "./dir/show",
    "./dir/activ",
    "./dir/blist",
    "./dir/bitem",
    "./dir/clist",
    "./dir/citem",
    "./dir/set"
], function( angular, http, router, boot, iCtrl, sCtrl, nCtrl,
        boxIndex, boxList, boxItem, boxShow, activ, blist, bitem,
        clist, citem, set ) {

var box = "jodobox.box"

angular
.module( box, [ http ] )
.config( router )
.run( boot )
.controller( "boxIndexCtrl", iCtrl )
.controller( "boxCtrl", sCtrl )
.controller( "newBoxCtrl", nCtrl )
.directive( "boxIndex", boxIndex )
.directive( "boxList", boxList )
.directive( "boxItem", boxItem )
.directive( "boxShow", boxShow )
.directive( "boxActivities", activ )
.directive( "boxBuildList", blist )
.directive( "boxBuildItem", bitem )
.directive( "boxCiList", clist )
.directive( "boxCiItem", citem )
.directive( "boxSetting", set )

return box

})
