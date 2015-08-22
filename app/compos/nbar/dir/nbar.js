define(function() {

return [
    "$templateCache",
    "$compile",
    function( $templateCache, $compile ) {
        var link = function link( scope, el, attrs ) {
            var tpl = $templateCache.get( "navbar.html" ),
                rsltEl = $compile( tpl )( scope )

            el.replaceWith( rsltEl )
        }

        return {
            scope: {
            },
            replace: true,
            link: link
        }
    }
]

})
