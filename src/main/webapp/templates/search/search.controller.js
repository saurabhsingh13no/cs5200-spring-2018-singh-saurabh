(function () {
    angular
        .module('CryptoManageApp')
        .controller('CryptoSearchController',CryptoSearchController);

        function CryptoSearchController($scope, $location, $http) {
            this.hello = "hello from CryptoSearchController";
            this.search = search;
            function search(cryptoId) {
                console.log("inside");
                // $location.url("/details/"+cryptoId);
                var url = "https://api.coinmarketcap.com/v1/ticker/";
                // var xhr = createCORSRequest('GET', url);
                // xhr.send();
                // console.log(xhr.response.data)

                $http.get('https://api.coinmarketcap.com/v1/ticker/'+cryptoId+"/").
                then(function(response) {
                    console.log(response.data);
                    $scope.allCryptos = response.data;
                });

            }
        }

})();