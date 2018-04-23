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
            .when('/customer/:id1/buyCrypto/:id2', {
                templateUrl: 'templates/buyCrypto/buyCrypto.html',
                controller: 'CryptoBuyCryptoController',
                controllerAs: 'model'
            })
            .when('/customer/:id/createPortfolio', {
                templateUrl : 'templates/createPortfolioForCustomer/createPortfolioForCustomer.html',
                controller:'CryptoCreatePortfolioForCustomerController',
                controllerAs:'model'
            })
            .when('/customer/:id/viewMyPortfolios', {
                templateUrl: 'templates/viewMyPortfolios/viewMyPortfolios.html',
                controller:'CryptoViewMyPortfoliosController',
                controllerAs:'model'
            })
            .when('/viewMyOwnedCryptos/:id', {
                templateUrl: 'templates/viewMyOwnedCryptos/viewMyOwnedCryptos.html',
                controller: 'CryptoViewMyOwnedCryptosController',
                controllerAs: 'model'
            })
            .when('/addCryptoToPortfolio/:id', {
                templateUrl:'templates/addCryptoToPortfolio/addCryptoToPortfolio.html',
                controller : 'CryptoAddCryptoToPortfolioController',
                controllerAs : 'model'
            })
            .when('/viewMyPortfolioManagers/:id', {
                templateUrl: 'templates/viewMyPortfolioManagers/viewMyPortfolioManagers.html',
                controller: 'CryptoViewMyPortfolioManagersController',
                controllerAs: 'model'
            })
            .when('/viewAllUserRelatedToPortfolioManager/:id', {
                templateUrl: 'templates/viewAllUserRelatedToPortfolioManager/viewAllUserRelatedToPortfolioManager.html',
                controller: 'CryptoViewAllUserRelatedToPortfolioManagerController',
                controllerAs:'model'
        });
            // .otherwise({redirectTo:'/'});
    }
    
})();