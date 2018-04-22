(function () {
    angular
        .module('CryptoManageApp')
        .controller('CryptoAssignPortfolioManagerController', CryptoAssignPortfolioManagerController);

    function CryptoAssignPortfolioManagerController($scope, $location, $http, $routeParams) {

        this.search = search;
        var customerInfo;
        var allManagers;
        this.addManager = addManager;

        function search(cryptoId) {
            $location.url("/search/:cryptoId");
        }

        function init() {

            customerId = $routeParams.id.substring(1,$routeParams.id.length);
            console.log("from edit User : "+customerId);
            $http.get("/api/person/"+customerId)
                .then(function (response) {
                    $scope.customerInfo=response.data;
                    customerInfo=response.data;
                    console.log(customerInfo);
                    console.log(customerInfo.firstName);
                });

            $http.get("/api/portfolioManager")
                .then(function (response) {
                    console.log(response.data);
                    $scope.allManagers = response.data;
                    allManagers = response.data;
                });
        }
        init();

        function addManager(managerInfo){
            console.log("hello wor");
            $http.post("/api/customer/"+customerInfo.id+"/portfolioManager/"+managerInfo.id)
                .then(function(response) {
                    console.log(response.data);
                })

        }

    }


})();