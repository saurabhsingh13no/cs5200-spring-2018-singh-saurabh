(function () {
    angular
        .module('CryptoManageApp')
        .controller('CryptoCustomerHomeController', CryptoCustomerHomeController);


    function CryptoCustomerHomeController($scope, $location, $http, $routeParams) {

        this.search = search;
        this.myName = "saurabh"
        this.customerInfo=null;
        this.addCrypto = addCrypto;


        var customerId;
        function search(cryptoId) {
            $location.url("/search/:cryptoId");
        }

        function init() {
            customerId = $routeParams.id.substring(1,$routeParams.id.length);
            $http.get("/api/customer/"+customerId)
                .then(function (response) {
                    customerInfo=response.data;
                    console.log(customerInfo);
                    console.log(customerInfo.firstName);
                })
        }
        init();

        function addCrypto() {
            $location.url('/addCrypto/:'+customerId);
        }





    }

})();
