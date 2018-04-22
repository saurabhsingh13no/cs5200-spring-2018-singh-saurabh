(function () {
    angular
        .module('CryptoManageApp')
        .controller('CryptoCustomerHomeController', CryptoCustomerHomeController);


    function CryptoCustomerHomeController($scope, $location, $http, $routeParams) {

        this.search = search;
        this.myName = "saurabh"
        this.customerInfo=null;
        this.addCrypto = addCrypto;
        this.assignPortfolioManager = assignPortfolioManager;
        this.showDetails=showDetails;
        this.buyCrypto = buyCrypto;
        this.viewMyPortfolioManagers=viewMyPortfolioManagers;
        this.viewMyOwnedCryptos=viewMyOwnedCryptos;


        var customerId;
        function search(cryptoId) {
            $http.get('https://api.coinmarketcap.com/v1/ticker/' + cryptoId + "/").then(function (response) {
                console.log(response.data);
                $scope.allCryptos = response.data;
            });
        }

        function init() {
            customerId = $routeParams.id.substring(1,$routeParams.id.length);
            $http.get("/api/customer/"+customerId)
                .then(function (response) {
                    customerInfo=response.data;
                    console.log(customerInfo);
                    console.log(customerInfo.firstName);
                })

            $http.get('https://api.coinmarketcap.com/v1/ticker/').then(function (response) {
                console.log(response.data);
                $scope.allCryptos = response.data;
            });
        }
        init();

        function addCrypto() {
            $location.url('/addCrypto/:'+customerId);
        }

        function assignPortfolioManager() {
            $location.url('/assignPortfolioManager/:'+customerId);
        }


        function showDetails(crypto) {
            console.log(crypto);
            $location.url('/showDetailsAboutCrypto/:'+crypto.id);

        }

        function buyCrypto(crypto) {

            console.log(crypto);
            $location.url('/customer/'+customerId+'/buyCrypto/:'+crypto.id);
        }

        function viewMyPortfolioManagers() {
            $location.url('/viewMyPortfolioManagers/:'+customerId);

        }

        function viewMyOwnedCryptos() {
            $location.url('/viewMyOwnedCryptos/:'+customerId);
        }



    }

})();
