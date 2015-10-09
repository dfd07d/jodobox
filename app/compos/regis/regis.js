define([
    "./../http/http",
    "./router",
    "./ctrl/signup",
    "./ctrl/signin",
    "./dir/signup",
    "./dir/signin"
], function( http, router, signupCtrl, signinCtrl, signupDir, signinDir ) {

var regis = "jodobox.regis"

angular
.module( regis, [ http ] )
.config( router )
.controller( "signupCtrl", signupCtrl )
.controller( "signinCtrl", signinCtrl )
.directive( "regisSignup", signupDir )
.directive( "regisSignin", signinDir )

return regis

})
