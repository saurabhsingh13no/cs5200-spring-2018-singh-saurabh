(function () {
    angular
        .module('CryptoManageApp')
        .controller('CryptoSignInController', CryptoSignInController);

    function CryptoSignInController($scope, $location, $http) {
        this.search = search;
        this.signIn = signIn;
        var id;
        var firstName;

        function search(cryptoId) {
            $location.url("/search/:cryptoId")

        }

        function signIn(inputUsername, inputPassword) {
            console.log("hello world");
            console.log(inputUsername, inputPassword);

            $http.get("/api/person?username="+inputUsername+"&password="+inputPassword)
                .then(function (response) {
                    id=response.data[0].id;
                    firstName=response.data[0].firstName;
                    if (response.data[0].username==="admin"){
                        console.log(response.data);
                        $location.url('/adminHome/:'+id);
                    }
                    else {
                        console.log(response.data);
                        $location.url('/customerHome/:'+id);
                    }
                })
        }
    }

})();