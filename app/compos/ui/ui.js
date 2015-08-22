define([
    "angular",
    "./cong/tooltip",
    "./cong/moment"
], function( angular, tooltip, moment ) {

var ui = "jodobox.ui"

angular
.module( ui, [ "ui.bootstrap" ] )
.config( tooltip )
.run( moment )

return ui

})
