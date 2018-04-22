(function () {
    angular
        .module('CryptoManageApp')
        .controller('CryptoEditUserController', CryptoEditUserController);

    function CryptoEditUserController($scope, $location, $http, $routeParams) {

        var customerInfo;
        this.editUser =editUser;

        function init() {
            customerId = $routeParams.id.substring(1,$routeParams.id.length);
            console.log("from edit User : "+customerId);
            $http.get("/api/person/"+customerId)
                .then(function (response) {
                    $scope.customerInfo=response.data;
                    customerInfo=response.data;
                    console.log(customerInfo);
                    console.log(customerInfo.firstName);
                })
        }
        init();

        function editUser(FirstName, LastName, InputEmail, username, InputPassword, phone, role) {

            if (role==="Admin") {
                $http.put('/api/person/'+customerInfo.id, personObj)
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
                $http.put('/api/portfolioManager/'+customerInfo.id, personObj)
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
                $http.put('/api/customer/'+customerInfo.id,personObj)
                    .then(function (response) {
                        console.log(response.data);
                    })

            }


        }



    }

})();