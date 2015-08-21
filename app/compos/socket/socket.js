define([
    "angular",
    "./serv/serve"
], function( angular, serve ) {

var socket = "jodobox.socket"

angular
.module( socket, [] )
.value( "serve", serve )

return socket

})
