(function () {
    angular
        .module('CryptoManageApp')
        .controller('CryptoViewMyPortfolioManagersController', CryptoViewMyPortfolioManagersController);

    function CryptoViewMyPortfolioManagersController($scope, $location, $http, $routeParams) {

        var customerId;
        var listOfAllPortfolioManagers;
        this.showAllUsers = showAllUsers;

        function init() {
            customerId = $routeParams.id.substring(1,$routeParams.id.length);
            $http.get("/api/customer/"+customerId+"/allPortfolioManagers" )
                .then(function (response) {
                    listOfAllPortfolioManagers=response.data;
                    $scope.listOfAllPortfolioManagers=response.data;
                    console.log(listOfAllPortfolioManagers);
                });
        }
        init();

        function showAllUsers(portfolioManagerInfo) {
            console.log("id of portfolio Manager : "+portfolioManagerInfo.id);
            $location.url('/viewAllUserRelatedToPortfolioManager/:'+portfolioManagerInfo.id);
        }

    }

})();