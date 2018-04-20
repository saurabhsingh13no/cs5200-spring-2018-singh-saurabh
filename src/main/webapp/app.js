(function () {
    angular
        .module("CryptoManageApp",['ngRoute'])
        .config(Config);


    function Config($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl:'templates/display/displayAllCryptos.html',
                controller:'CryptoDisplayAllController',
                controllerAs:'model'
            })
            .when('/search', {
                templateUrl:'templates/search/search.html',
                controller: 'CryptoSearchController',
                controllerAs:'model'
            })
            .when('/details' , {
                templateUrl: 'templates/details/details.html',
                controller: 'CryptoDetailsController',
                controllerAs : 'model'
            })
            .when('/details/:title ' , {
                templateUrl: 'templates/details/details.html',
                controller: 'CryptoDetailsController',
                controllerAs : 'model'
            });
    }
    
})();