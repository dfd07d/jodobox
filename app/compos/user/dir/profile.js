define(function() {

return [
    "$templateCache",
    "$compile",
    function( $templateCache, $compile ) {
        var link = function link( scope, el, attrs, ctrl, transclude ) {
            var tpl = $templateCache.get( attrs.template ),
                rsltEl = $compile( tpl, transclude )( scope )

            el.replaceWith( rsltEl )
        }

        return {
            transclude: true,
            link: link
        }
    }
]

})
