(function () {
    angular
        .module('CryptoManageApp')
        .controller('CryptoCreateNewUserController', CryptoCreateNewUserController);

    function  CryptoCreateNewUserController($scope, $location, $http) {
        this.createUser = createUser;

        function createUser(FirstName, LastName, InputEmail, username, InputPassword, phone, role) {
            console.log(FirstName, LastName, InputEmail, username, InputPassword, phone,role);

            personObj = {
                firstName: FirstName,
                lastName: LastName,
                email:InputEmail,
                username:username,
                password:InputPassword,
                phone:phone
            };

            if (role==="Admin") {
                $http.post('/api/person', personObj)
                    .then(function (response) {
                        console.log(response.data);
                    })
            }

            if (role==="Portfolio Manager") {
                personObj = {
                    firstName: FirstName,
                    lastName: LastName,
                    email:InputEmail,
                    username:username,
                    password:InputPassword,
                    phone:phone,
                    created : new Date()
                };
                $http.post('/api/portfolioManager', personObj)
                    .then(function (response) {
                        console.log(response.data);
                    })
            }
            if (role==="Customer") {
                personObj = {
                    firstName: FirstName,
                    lastName: LastName,
                    email:InputEmail,
                    username:username,
                    password:InputPassword,
                    phone:phone,
                    created : new Date()
                };
                $http.post('/api/customer',personObj)
                    .then(function (response) {
                        console.log(response.data);
                    })

            }

        }

    }

})();