define(function() {

return [
    "$templateCache",
    "$compile",
    function( $templateCache, $compile ) {
        var link = function( scope, el, attrs ) {
            var tpl = $templateCache.get( attrs.template ),
                rsltEl = $compile( tpl )( scope )

            el.replaceWith( rsltEl )
        }

        return {
            transclude: true,
            link: link
        }
    }
]

})
