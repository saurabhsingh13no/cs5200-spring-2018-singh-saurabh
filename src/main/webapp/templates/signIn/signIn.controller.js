(function () {
    angular
        .module('CryptoManageApp')
        .controller('CryptoSignInController', CryptoSignInController);

    function CryptoSignInController($scope, $location, $http) {
        this.search = search;
        this.signIn = signIn;
        var id=0

        function search(cryptoId) {
            $location.url("/search/:cryptoId")

        }

        function signIn(inputEmail, inputPassword) {

            $http.get("/api/customer?username="+inputEmail+"&password="+inputPassword)
                .then(function (response) {
                    id=response.data[0].id;
                    console.log(response.data[0].id);
                })
                .then(function () {
                    $location.url('/customerHome/:'+id);
                })
        }
    }

})();