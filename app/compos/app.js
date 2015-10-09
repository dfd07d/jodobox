define([
    "./core/core",
    "./ui/ui",
    "./nbar/nbar",
    "./regis/regis",
    "./user/user",
    "./box/box",
    "./image/image",
    "./apl/apl",
    "./addon/addon"
], function( core, ui, nbar, box, image, apl, addon ) {

var app = "jodobox.app"

angular
.module(app, [
    core,
    ui,
    nbar,
    box,
    image,
    apl,
    addon
])

return app

})
