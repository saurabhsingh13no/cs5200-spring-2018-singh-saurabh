(function () {
    angular
        .module('CryptoManageApp')
        .controller('CryptoAddCryptoController', CryptoAddCryptoController);

    function CryptoAddCryptoController($scope, $location, $http, $routeParams) {
        var customerId = $routeParams.id.substring(1,$routeParams.id.length);
        console.log("AddCrypto customerId : "+customerId);


        function search(cryptoId) {
            $location.url("/search/:cryptoId");
        }

        function init() {
            $http.get('https://api.coinmarketcap.com/v1/ticker/').
            then(function(response) {
                console.log(response.data);
                $scope.allCryptos = response.data;
            });
        }
        init();






    }


})();