(function () {
    angular
        .module('CryptoManageApp')
        .controller('CryptoSignUpController', CryptoSignUpController);


    function CryptoSignUpController($scope, $location, $http) {

        this.search = search;
        this.signUp = signUp;

        function search(cryptoId) {
            $location.url("/search/:cryptoId")

        }

        function signUp(firstName, lastName, inputEmail, inputPassword) {
            console.log(firstName, lastName, inputEmail, inputPassword);
            $location.url("/api/person");
        }
    }


})();