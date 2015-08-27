define(function() {

return [
    "$rootScope",
    function( $rootScope ) {
        var ctrl = this

        ctrl.items = [
            { n: "quick to prototype", i: "//pbs.twimg.com/profile_images/540601078916452352/gIke9rjv.png" },
            { n: "microframwork", i: "//pbs.twimg.com/profile_images/571099105590398976/BwZ_PZxK.png" },
            { n: "lightwight", i: "//img.stackshare.io/service/773/6394678.png" },
            { n: "delightful", i: "//pbs.twimg.com/profile_images/518069764510330880/yRNL7yTW.png" },
            { n: "postgresql", i: "//pbs.twimg.com/profile_images/502171183144378368/ASOhU5xJ.png" },
            { n: "nodejs", i: "//pbs.twimg.com/profile_images/494226256276123648/GWnVTc9j.png" }
        ]

        $rootScope.klass = "images i-index"
    }
]

})
