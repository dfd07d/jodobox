define([
    "./serv/promise"
], function( promise ) {

var http = "jodobox.http"

angular
.module( http, [] )
.factory( promise )

return http

})
