define([
    "./cong/tooltip",
    "./cong/moment"
], function( tooltip, moment ) {

var ui = "jodobox.ui"

angular
.module( ui, [ "ui.bootstrap" ] )
.config( tooltip )
.run( moment )

return ui

})
