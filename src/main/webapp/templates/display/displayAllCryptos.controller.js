(function () {
    angular
        .module('CryptoManageApp')
        .controller('CryptoDisplayAllController',CryptoDisplayAllController);

    function CryptoDisplayAllController($scope, $location, $http) {
        this.search=search;

        function init() {
            $http.get('https://api.coinmarketcap.com/v1/ticker/').
            then(function(response) {
                console.log(response.data);
                $scope.allCryptos = response.data;
            });
        }
        init();

        function search(cryptoId) {
            console.log("inside");
            // $location.url("/details/"+cryptoId);
            var url = "https://api.coinmarketcap.com/v1/ticker/";
            // var xhr = createCORSRequest('GET', url);
            // xhr.send();
            // console.log(xhr.response.data)

            $http.get('https://api.coinmarketcap.com/v1/ticker/' + cryptoId + "/").then(function (response) {
                console.log(response.data);
                $scope.allCryptos = response.data;
            });

        }

    }

})();