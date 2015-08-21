define([
    "angular",
    "./../http/http",
    "./route",
    "./ctrl/signup",
    "./ctrl/signin",
    "./dir/signup",
    "./dir/signin"
], function( angular, http, route, signupCtrl, signinCtrl, signupDir, signinDir ) {

var regis = "jodobox.regis"

angular
.module( regis, [ http ] )
.config( route )
.controller( "signupCtrl", signupCtrl )
.controller( "signinCtrl", signinCtrl )
.directive( "regisSignup", signupDir )
.directive( "regisSignin", signinDir )

return regis

})
