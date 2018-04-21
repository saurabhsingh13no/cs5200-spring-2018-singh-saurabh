(function () {
    angular
        .module('CryptoManageApp')
        .controller('CryptoSignUpController', CryptoSignUpController);


    function CryptoSignUpController($scope, $location, $http) {

        this.search = search;
        this.signUp = signUp;

        function search(cryptoId) {
            $location.url("/search/:cryptoId");

        }

        function signUp(firstName, lastName, inputEmail, inputPassword) {
            console.log(firstName, lastName, inputEmail, inputPassword);
            var id=0;

            personObj = {
                firstName : firstName,
                lastName: lastName,
                email: inputEmail,
                username:inputEmail,
                password:inputPassword,
                created:new Date()
            };
            $http.post('/api/customer', personObj);

            $http.get("/api/customer?username="+inputEmail)
                .then(function (response) {
                    console.log(response.data)
                });

            // $http.post('/api/customer', {id:id, created:new Date()})

        }
    }


})();