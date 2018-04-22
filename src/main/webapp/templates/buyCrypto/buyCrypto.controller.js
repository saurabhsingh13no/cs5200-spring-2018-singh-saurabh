(function () {
    angular
        .module('CryptoManageApp')
        .controller('CryptoBuyCryptoController', CryptoBuyCryptoController);

    function CryptoBuyCryptoController($scope, $location, $http, $routeParams) {

        var cryptoId;
        var cryptoSymbol;
        var allCryptos;
        this.buyCryptoOfAmount = buyCryptoOfAmount;
        console.log("inside CryptoBuyCryptoController ");

        function init() {
            $scope.cryptoId = $routeParams.id.substring(1, $routeParams.id.length);
            cryptoId = $routeParams.id.substring(1, $routeParams.id.length);
            console.log(cryptoId);
            $http.get('https://api.coinmarketcap.com/v1/ticker/' + cryptoId + "/")
                .then(function (response) {
                    console.log(response.data);
                    $scope.allCryptos = response.data[0];
                    allCryptos = response.data[0];
                    $scope.cryptoSymbol = response.data[0].symbol;
                    cryptoSymbol = response.data[0].symbol;
                    console.log(cryptoSymbol);
                });

        }

        init();

        function buyCryptoOfAmount(unitAmount) {
            console.log(unitAmount);
            console.log(parseInt(allCryptos.market_cap_usd));
            console.log(allCryptos.market_cap_usd);
            CryptoObj = {
                name: allCryptos.name,
                priceInUSD: parseFloat(allCryptos.price_usd),
                marketCap: parseFloat(allCryptos.market_cap_usd),
                volumne24h: parseFloat(allCryptos['24h_volume_usd']),
                circulatingSupply: parseFloat(allCryptos.available_supply),
                circulatingSupplyBase: allCryptos.total_supply,
                change24h: allCryptos.percent_change_24h
            };

            $http.post("/api/cryptoCurrency", CryptoObj)
                .then(function (response) {
                    console.log(response.data);
                })
                .then(function (response) {
                    $scope.boughtCrypto = unitAmount + " unit of " + cryptoId + " bought ";
                })
        }
    }



})();