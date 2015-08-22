define([
    "angular",
    "./../quota/quota",
    "./dir/nbar"
], function( angular, quota, navbar ) {

var nbar = "jodobox.navbar"

angular
.module( nbar, [ quota ])
.directive( "navbar", navbar )

return nbar

})
