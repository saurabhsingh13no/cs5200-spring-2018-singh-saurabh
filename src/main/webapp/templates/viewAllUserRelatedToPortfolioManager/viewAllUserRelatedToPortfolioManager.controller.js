(function () {
    angular
        .module('CryptoManageApp')
        .controller('CryptoViewAllUserRelatedToPortfolioManagerController', CryptoViewAllUserRelatedToPortfolioManagerController);

    function CryptoViewAllUserRelatedToPortfolioManagerController($scope, $location, $http, $routeParams) {
        var portfolioManagerId;
        var listOfAllUsers;
        // this.showAllUsers = showAllUsers;

        function init() {
            console.log("inside viewAllUserRelatedToPortfolioManager ");
            portfolioManagerId = $routeParams.id.substring(1,$routeParams.id.length);
            $http.get("/api/portfolioManager/"+portfolioManagerId+"/showAllCustomers")
                .then(function (response) {
                    listOfAllUsers=response.data;
                    $scope.listOfAllUsers=response.data;
                    console.log(listOfAllUsers);
                });
        }
        init();

    }
})();