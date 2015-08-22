define(function() {

return [
    "$templateCache",
    "$compile",
    function( $templateCache, $compile ) {
        return {
            link: function( scope, el, attrs ) {
                var tpl = $templateCache.get( attrs.template ),
                    rsltEl = $compile( tpl )( scope )

                el.replaceWith( rsltEl )
            }
        }
    }
]

})
