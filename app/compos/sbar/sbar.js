define([
    "angular",
    "./../quota/quota",
    "./dir/sbar"
], function( angular, quota, sidebar ) {

var sbar = "jodobox.sidebar"

angular
.module( sbar, [ quota ])
.directive( "sidebar", sidebar )

return sbar

})
