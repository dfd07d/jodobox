define([
    "angular",
    "./../http/http",
    "./route",
    "./ctrl/show",
    "./dir/profile"
], function( angular, http, route, userCtrl, profile ) {

var user = "jodobox.user"

angular
.module( user, [ http ] )
.config( route )
.controller( "userCtrl", userCtrl )
.directive( "userProfile", profile )

return user

})
