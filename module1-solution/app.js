(function () {
'use strict';

angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.message = '';
  $scope.items = '';

  $scope.tooMuch = function() {
    if ($scope.items === '') {
      $scope.message = 'Please enter data first';
      return;
    }

    var nonEmptyItems = $scope.items.split(',').filter(function (item) {
      return item.trim() !== '';
    });
    var itemCount = nonEmptyItems.length;
    if (itemCount <= 3) {
      $scope.message = 'Enjoy!';
    } else {
      $scope.message = 'Too much!';
    }
  }
}
})();
