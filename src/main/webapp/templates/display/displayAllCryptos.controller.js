(function () {
    angular
        .module('CryptoManageApp')
        .controller('CryptoDisplayAllController',CryptoDisplayAllController);

    function CryptoDisplayAllController($scope, $location, $http) {

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