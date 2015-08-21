define([
    "angular",
    "./core/core",
    "./ui/ui",
    "./user/user",
    "./box/box",
    "./image/image",
    "./apl/apl",
    "./addon/addon"
], function( angular, core, ui, box, image, apl, addon ) {

var app = "jodobox.app"

angular
.module( app, [
    core,
    ui,
    box,
    image,
    apl,
    addon
])

return app

})
