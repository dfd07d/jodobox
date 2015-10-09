define([
    "./../quota/quota",
    "./dir/nbar"
], function( quota, navbar ) {

var nbar = "jodobox.navbar"

angular
.module( nbar, [ quota ])
.directive( "navbar", navbar )

return nbar

})
