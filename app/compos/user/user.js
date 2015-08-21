define([
    "angular",
    "./../http/http",
    "./route"
], function( angular, http, route ) {

var user = "jodobox.user"

angular
.module( user, [ http ] )
.config( route )

return user

})
