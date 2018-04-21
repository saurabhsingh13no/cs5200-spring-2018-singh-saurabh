(function () {
    angular
        .module('CryptoManageApp')
        .controller('CryptoSignInController', CryptoSignInController);

    function CryptoSignInController($scope, $location, $http) {
        this.search = search;

        function search(cryptoId) {
            $location.url("/search/:cryptoId")

        }
    }

})();