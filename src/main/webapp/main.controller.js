(function () {
    angular
        .module('CryptoManageApp')
        .controller('MainController',MainController);

    function MainController($scope, $location, $http) {
        function init(){
            $http.get('https://api.coinmarketcap.com/v1/ticker/').
            then(function(response) {
                console.log(response.data);
                vm.allCryptos = response.data;
                console.log(response.data);
            });
        }
        init();
    }

})();