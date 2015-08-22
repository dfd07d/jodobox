define(function() {

return [
    "$templateCache",
    "$compile",
    function( $templateCache, $compile ) {
        var link = function link( scope, el, attrs ) {
            var tpl = $templateCache.get( attrs.template ),
                rsltEl = $compile( tpl )( scope )

            el.replaceWith( rsltEl )
        }

        return {
            link: link
        }
    }
]

})
