(function(){
    'use strict';

    angular.module('app').controller('menuCardsController', menuCardsController);

    menuCardsController.$inject = ["$scope", "$rootScope","List"];

    function menuCardsController ($scope, $rootScope, List) {
      $scope.query = {
        order: "name",
        limit: 10,
        page: 1
      };

      $scope.add_tocart = function (item) {
        $rootScope.cart.items.push(item);
      }

      List.items.get($scope.query, function(item){
        $scope.items = item.data;
      });
    }
})();
