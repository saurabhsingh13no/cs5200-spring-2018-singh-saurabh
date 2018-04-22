(function () {
    angular
        .module('CryptoManageApp')
        .controller('CryptoAdminHomeController', CryptoAdminHomeController);

    function CryptoAdminHomeController($scope, $location, $http) {
        this.search = search;
        this.createUser = createUser;
        this.deleteUser = deleteUser;

        function search(cryptoId) {
            $location.url("/search/:cryptoId")

        }

        function init() {

            $http.get('/api/person')
                .then(function (response) {
                    console.log(response.data);
                    $scope.allUsers = response.data;
            });
        }
        init();

        function createUser() {

        }

        function deleteUser(id) {
            console.log("id : "+id);
            $http.delete('/api/person/'+id)
                .then(function (response) {
                    console.log(response.data);
                })

        }



    }


})();