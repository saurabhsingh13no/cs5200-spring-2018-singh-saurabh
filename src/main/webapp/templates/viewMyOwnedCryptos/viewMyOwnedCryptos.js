(function () {
    angular
        .module('CryptoManageApp')
        .controller('CryptoViewMyOwnedCryptosController', CryptoViewMyOwnedCryptosController);


    function CryptoViewMyOwnedCryptosController($scope, $location, $http, $routeParams) {

        var listOfAllCryptosOwned;
        var customerId;

        function init() {
            customerId = $routeParams.id.substring(1,$routeParams.id.length);
            $http.get("/api/customer/"+customerId+"/allCryptos")
                .then(function (response) {
                    listOfAllCryptosOwned=response.data;
                    $scope.listOfAllCryptosOwned=response.data
                    console.log(listOfAllCryptosOwned);
                });
        }
        init();
    }

})();