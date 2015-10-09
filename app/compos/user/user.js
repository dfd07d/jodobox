define([
    "./../http/http",
    "./router",
    "./ctrl/show",
    "./dir/profile",
    "./dir/sbar",
    "./dir/info",
    "./dir/bio",
    "./dir/pwd"
], function( http, router, userCtrl, profile,
        sbar, info, bio, pwd ) {

var user = "jodobox.user"

angular
.module( user, [ http ] )
.config( router )
.controller( "userCtrl", userCtrl )
.directive( "userProfile", profile )
.directive( "userProfileSidebar", sbar )
.directive( "userProfileInfo", info )
.directive( "userProfileBio", bio )
.directive( "userProfilePassword", pwd )

return user

})
