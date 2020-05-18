(function () {
    'use strict';
    
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.message = "";
        $scope.foodList = "";

        $scope.checkLunch = function(){
            if ($scope.foodList.split(',').length > 3){
                $scope.message = "Too much!";
            } else {
                $scope.message = "Enjoy!";
            }
        };
    }


})();