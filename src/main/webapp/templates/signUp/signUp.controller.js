(function () {
    angular
        .module('CryptoManageApp')
        .controller('CryptoSignUpController', CryptoSignUpController);


    function CryptoSignUpController($scope, $location, $http) {

        this.search = search;
        this.signUp = signUp;

        function init() {
            $http.get("/api/customer?username=alice@gmail.com").
                then(function (response) {console.log(response.data)});
        }
        init();


        function search(cryptoId) {
            $location.url("/search/:cryptoId");

        }

        function signUp(firstName, lastName, inputUsername, inputEmail, inputPassword) {
            console.log(firstName, lastName, inputUsername, inputEmail, inputPassword);
            var id=0;

            personObj = {
                firstName : firstName,
                lastName: lastName,
                email: inputEmail,
                username:inputUsername,
                password:inputPassword,
                created:new Date(),
                accountBalanace:10000
            };
            $http.post('/api/customer/', personObj)
            .then(function() {
                    $http.get("/api/customer?username="+inputUsername)
                        .then(function (response) {
                            console.log(response.data[0]);
                            id=response.data[0].id;
                        })
                        .then(function() {
                                 $location.url("/customerHome/:"+id);
                        })
                });
        }
    }


})();