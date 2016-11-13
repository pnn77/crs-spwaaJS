(function () {
  'use strict'

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);
  LunchCheckController.$inject=['$scope']

  function LunchCheckController($scope){
    $scope.msg = "";
    $scope.lunch = "";

    $scope.checkLunch = function (){
      if ($scope.lunch != ""){
        var items = $scope.lunch.split(",");
        $scope.msg = (items.length < 4) ? "Enjoy!":"Too Much!";
      }else {
        $scope.msg = "Please Enter Data First";
      }
    };
  }

})();
