define([
    "angular",
    "./core/core",
    "./ui/ui",
    "./sbar/sbar",
    "./regis/regis",
    "./user/user",
    "./box/box",
    "./image/image",
    "./apl/apl",
    "./addon/addon"
], function( angular, core, ui, sbar, box, image, apl, addon ) {

var app = "jodobox.app"

angular
.module(app, [
    core,
    ui,
    sbar,
    box,
    image,
    apl,
    addon
])

return app

})
