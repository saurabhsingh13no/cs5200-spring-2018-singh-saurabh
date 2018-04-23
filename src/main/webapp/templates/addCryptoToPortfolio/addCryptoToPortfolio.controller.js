(function () {
    angular
        .module('CryptoManageApp')
        .controller('CryptoAddCryptoToPortfolioController', CryptoAddCryptoToPortfolioController);

    function CryptoAddCryptoToPortfolioController($scope, $location, $http, $routeParams) {

        var portfolioId;
        var allCryptos;
        var cryptoSymbol;

        this.addCryptoToPortfolio=addCryptoToPortfolio;

        function init() {
            portfolioId = $routeParams.id.substring(1,$routeParams.id.length);
            console.log("portfolio Id : "+portfolioId);
        }
        init();

        function addCryptoToPortfolio(Crypto,unitAmount) {
            console.log(Crypto,unitAmount);
            $http.get('https://api.coinmarketcap.com/v1/ticker/'+Crypto+"/")
                .then(function (response) {
                    console.log(response.data);
                    $scope.allCryptos = response.data[0];
                    allCryptos = response.data[0];
                    $scope.cryptoSymbol = response.data[0].symbol;
                    cryptoSymbol = response.data[0].symbol;
                    console.log(cryptoSymbol);
                })
                .then(function (response) {
                    CryptoObj = {
                        name: allCryptos.name,
                        priceInUSD: parseFloat(allCryptos.price_usd),
                        marketCap: parseFloat(allCryptos.market_cap_usd),
                        volumne24h: parseFloat(allCryptos['24h_volume_usd']),
                        circulatingSupply: parseFloat(allCryptos.available_supply),
                        circulatingSupplyBase: allCryptos.total_supply,
                        change24h: allCryptos.percent_change_24h,
                        amountBuyCrypto:unitAmount
                    };
                    $http.post("/api/portfolio/"+portfolioId+"/crypto/", CryptoObj)
                        .then(function (response){
                            console.log(response.data);
                            $scope.addedCryptoToPortfolio = "Successfully added crypto to portfolio";
                        })

                })
        }


    }


})();