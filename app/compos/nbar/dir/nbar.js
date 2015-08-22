define(function() {

return [
    "$templateCache",
    "$compile",
    function( $templateCache, $compile ) {
        var link = function link( scope, el, attrs ) {
        }

        return {
            scope: {
            },
            templateUrl: "compos/nbar/tpl/nbar.html",
            replace: true,
            link: link
        }
    }
]

})
