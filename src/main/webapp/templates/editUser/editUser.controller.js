(function () {
    angular
        .module('CryptoManageApp')
        .controller('CryptoEditUserController', CryptoEditUserController);

    function CryptoEditUserController($scope, $location, $http, $routeParams) {

        var customerInfo;

        function init() {
            customerId = $routeParams.id.substring(1,$routeParams.id.length);
            console.log("from edit User : "+customerId);
            $http.get("/api/customer/"+customerId)
                .then(function (response) {
                    customerInfo=response.data;
                    console.log(customerInfo);
                    console.log(customerInfo.firstName);
                })
        }
        init();



    }

})();