(function () {
    angular
        .module('CryptoManageApp')
        .controller('CryptoDetailsController',CryptoDetailsController);

    function CryptoDetailsController($routeParams) {
        this.hello = "hello from CryptoDetailsController";

        this.searchItem = $routeParams.title;
        // console.log("asdfasdf"+this.searchItem)
        console.log($routeParams);
    }
})();