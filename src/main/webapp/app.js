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
            .when('/displayAll', {
                templateUrl: 'templates/display/displayAllCryptos.html',
                controller: 'CryptoDisplayAllController',
                controllerAs:'model'
            })
            .when('/search', {
                templateUrl:'templates/search/search.html',
                controller: 'CryptoSearchController',
                controllerAs:'model'
            })
            .when('/search/:id', {
                templateUrl:'templates/search/search.html',
                controller: 'CryptoSearchController',
                controllerAs:'model'
            })
            .when('/details' , {
                templateUrl: 'templates/details/details.html',
                controller: 'CryptoDetailsController',
                controllerAs : 'model'
            })
            .when('/details/:title' , {
                templateUrl: 'templates/details/details.html',
                controller: 'CryptoDetailsController',
                controllerAs : 'model'
            })
            .when('/SignIn' , {
                templateUrl : 'templates/signIn/signIn.html',
                controller : 'CryptoSignInController',
                controllerAs : 'model'
            })
            .when('/SignUp', {
                templateUrl: 'templates/signUp/signUp.html',
                controller: 'CryptoSignUpController',
                controllerAs: 'model'
            })
            .when('/customerHome', {
                templateUrl: 'templates/customerHome/customerHome.html',
                controller: 'CryptoCustomerHomeController',
                controllerAs: 'model'
            })
            .when('/customerHome/:id', {
                templateUrl: 'templates/customerHome/customerHome.html',
                controller: 'CryptoCustomerHomeController',
                controllerAs: 'model'
            })
            .when('/addCrypto/:id', {
                templateUrl: 'templates/addCrypto/addCrypto.html',
                controller: 'CryptoAddCryptoController',
                controllerAs: 'model'
            })
            .when('/adminHome/:id', {
                templateUrl: 'templates/adminHome/adminHome.html',
                controller: 'CryptoAdminHomeController',
                controllerAs: 'model'
            })
            .when('/editUser/:id', {
                templateUrl: 'templates/editUser/editUser.html',
                controller: 'CryptoEditUserController',
                controllerAs: 'model'
            })
            .when('/createNewUser', {
                templateUrl: 'templates/createNewUser/createNewUser.html',
                controller: 'CryptoCreateNewUserController',
                controllerAs: 'model'
            })
            .when('/assignPortfolioManager/:id', {
                templateUrl: 'templates/assignPortfolioManager/assignPortfolioManager.html',
                controller: 'CryptoAssignPortfolioManagerController',
                controllerAs: 'model'
            })
            .when('/showDetailsAboutCrypto/:id', {
                templateUrl: 'templates/showDetailsAboutCrypto/showDetailsAboutCrypto.html',
                controller: 'CryptoShowDetailsAboutCryptoController',
                controllerAs: 'model'
            })
            .when('/buyCrypto/:id', {
                templateUrl: 'templates/buyCrypto/buyCrypto.html',
                controller: 'CryptoBuyCryptoController',
                controllerAs: 'model'
        });
            // .otherwise({redirectTo:'/'});
    }
    
})();