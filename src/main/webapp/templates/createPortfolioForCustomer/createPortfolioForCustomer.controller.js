(function () {
    angular
        .module('CryptoManageApp')
        .controller('CryptoCreatePortfolioForCustomerController', CryptoCreatePortfolioForCustomerController);

    function CryptoCreatePortfolioForCustomerController ($scope, $location, $http, $routeParams) {

        var customerId;
        var customerInfo;
        this.createPortfolio=createPortfolio;
        var managerId;
        var portfolioId;

        function init() {
            customerId = $routeParams.id;
            console.log("Customer Id : "+$routeParams.id);
            $http.get("/api/customer/"+customerId)
                .then(function (response) {
                    customerInfo=response.data;
                    $scope.customerInfo=response.data;
                    console.log(customerInfo);
                });
        }
        init();

        function createPortfolio(portfolioName, managerId) {

            console.log(portfolioName, managerId);

            portfolioObj={
                name:portfolioName,
                portfolioManagerId:managerId
            };
            $http.post("/api/portfolio/", portfolioObj)
                .then(function(response) {
                    console.log(response.data);
                })
                .then(function (response) {
                    $http.get('/api/portfolio?name='+portfolioName)
                        .then(function (response) {
                            portfolioId=response.data[0].id;
                            console.log(portfolioId);
                        })
                        .then(function (response) {
                            $http.post("/api/portfolio/"+portfolioId+"/portfolioManagerId/"+managerId)
                                .then(function (response) {
                                    console.log("successfully added manager to portfolio"+response.data);
                                })
                        })
                })

        }



    }


})();