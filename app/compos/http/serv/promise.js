define(function() {

return [
    "$q",
    "$http",
    "$timeout",
    function( $q, $http, $timeout ) {
        function expect( options ) {
            var req = {
                method: "GET",
                url: HTTP.API + url,
                data: null,
                param: null
            }

            options && angular.extend( req, options )

            var defer = $q.defer()

            $http( req )
            .success(function( res ) {
                defer.resolve( res )
            })
            .error(function( data, status ) {
                defer.reject({
                    status: status,
                    data: data
                })
            })
            .catch(function( err ) {
                throw new Error( err )
            })

            return defer.promise
        }

        return {
            expect: expect
        }
    }
]

})
