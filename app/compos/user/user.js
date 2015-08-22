define([
    "angular",
    "./../http/http",
    "./route",
    "./ctrl/show",
    "./dir/profile",
    "./dir/sbar",
    "./dir/info",
    "./dir/bio",
    "./dir/pwd"
], function( angular, http, route, userCtrl, profile,
        sbar, info, bio, pwd ) {

var user = "jodobox.user"

angular
.module( user, [ http ] )
.config( route )
.controller( "userCtrl", userCtrl )
.directive( "userProfile", profile )
.directive( "userProfileSidebar", sbar )
.directive( "userProfileInfo", info )
.directive( "userProfileBio", bio )
.directive( "userProfilePassword", pwd )

return user

})
