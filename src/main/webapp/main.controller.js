(function () {
    angular
        .module('CryptoManageApp')
        .controller('CryptoMainController', CryptoMainController);


    function CryptoMainController($scope, $location, $http) {

        this.search=search;
        function init() {
            $location.url("/displayAll/")
        }
        // init();

        function search(cryptoId) {
            $location.url("/search/")

        }

    }

})();