(function () {
    angular
        .module('CryptoManageApp')
        .controller('CryptoAdminHomeController', CryptoAdminHomeController);

    function CryptoAdminHomeController($scope, $location, $http) {
        this.search1 = search1;
        this.createUser = createUser;
        this.deleteUser = deleteUser;
        this.editUser = editUser;
        this.showAllUser = showAllUser;
        this.search=search;

        function search1(cryptoId) {
            $location.url("/search/:cryptoId")

        }

        function search(userName) {
            console.log("Inside userSearch : "+userName)
            $http.get('/api/person?username='+userName)
                .then(function (response) {
                    console.log(response.data);
                    $scope.allUsers = response.data;
                });
        }

        function init() {

            $http.get('/api/person')
                .then(function (response) {
                    console.log(response.data);
                    $scope.allUsers = response.data;
            });
        }
        init();

        function showAllUser() {
            $http.get('/api/person')
                .then(function (response) {
                    console.log(response.data);
                    $scope.allUsers = response.data;
                });

        }

        function createUser() {
            console.log("moving to /createNewUser");
            $location.url('/createNewUser');

        }

        function deleteUser(id) {
            console.log("id : "+id);
            $http.delete('/api/person/'+id)
                .then(function (response) {
                    console.log(response.data);
                })

        }

        function editUser(id) {
            console.log("id for userEditing: '"+id+"'" );
            $location.url('/editUser/:'+id);
        }

    }


})();