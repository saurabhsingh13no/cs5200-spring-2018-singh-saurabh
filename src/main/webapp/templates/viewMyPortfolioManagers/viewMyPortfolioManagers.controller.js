(function () {
    angular
        .module('CryptoManageApp')
        .controller('CryptoViewMyPortfolioManagersController', CryptoViewMyPortfolioManagersController);

    function CryptoViewMyPortfolioManagersController($scope, $location, $http, $routeParams) {

        var customerId;
        var listOfAllPortfolioManagers;

        function init() {
            customerId = $routeParams.id.substring(1,$routeParams.id.length);
            $http.get("/api/customer/"+customerId+"/allPortfolioManagers" )
                .then(function (response) {
                    listOfAllPortfolioManagers=response.data;
                    $scope.listOfAllPortfolioManagers=response.data
                    console.log(listOfAllPortfolioManagers);
                });
        }
        init();

    }

})();