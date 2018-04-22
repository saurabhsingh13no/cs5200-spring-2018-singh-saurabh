(function () {
    angular
        .module('CryptoManageApp')
        .controller('CryptoShowDetailsAboutCryptoController', CryptoShowDetailsAboutCryptoController);

    function CryptoShowDetailsAboutCryptoController ($scope, $location, $http, $routeParams) {
        var cryptoId;
        var cryptoSymbol;

        function init() {
            $scope.cryptoId = $routeParams.id.substring(1,$routeParams.id.length);
            cryptoId = $routeParams.id.substring(1,$routeParams.id.length);
            console.log(cryptoId);
            $http.get('https://api.coinmarketcap.com/v1/ticker/'+cryptoId+"/")
                .then(function (response) {
                    console.log(response.data);
                    $scope.allCryptos = response.data;
                    $scope.cryptoSymbol = response.data[0].symbol;
                    cryptoSymbol = response.data[0].symbol;
                    console.log(cryptoSymbol);
            });

        }
        init();

    }

})();