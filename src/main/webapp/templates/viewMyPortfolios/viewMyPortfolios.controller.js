(function () {
    angular
        .module('CryptoManageApp')
        .controller('CryptoViewMyPortfoliosController', CryptoViewMyPortfoliosController);

    function CryptoViewMyPortfoliosController($scope, $location, $http, $routeParams) {

        var customerInfo;
        var allPortfolio;
        this.addCrypto=addCrypto;

        function init() {
            customerId = $routeParams.id;
            console.log(customerId);
            $http.get("/api/customer/"+customerId)
                .then(function (response) {
                    customerInfo=response.data;
                    $scope.customerInfo=response.data;
                    console.log(customerInfo);
                    console.log(customerInfo.firstName);
                });

            $http.get('/api/portfolio')
                .then(function (response) {
                    $scope.allPortfolio = response.data;
                    allPortfolio=response.data;
                    console.log(allPortfolio);
                })
        }
        init();

        function addCrypto(portfolio) {
            $location.url('/addCryptoToPortfolio/:'+portfolio.id);

        }

    }


})();