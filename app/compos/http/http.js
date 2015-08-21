define([
    "angular",
    "./serv/promise"
], function( angular, promise ) {

var http = "jodobox.http"

angular
.module( http, [] )
.factory( promise )

return http

})
