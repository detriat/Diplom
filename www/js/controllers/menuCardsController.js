(function(){
    'use strict';

    angular.module('app').controller('menuCardsController', menuCardsController);

    menuCardsController.$inject = ["$scope", "$rootScope","List"];

    function menuCardsController ($scope, $rootScope, List) {

$scope.sizes = ['1','2','3','4','5','6','7','8','9','10'];
      $scope.query = {
        order: "name",
        limit: 10,
        page: 1
      };
      $scope.total = 0;
      $scope.add_tocart = function (item) {
        $rootScope.cart.items.push(item);

        $scope.total = Number($scope.total) + Number(item.price);
        console.log(this.total);
      }

      $scope.delete_forCart = function(index){
        $rootScope.cart.items.splice(index, 1);
        console.log(index);
      }


      List.items.get($scope.query, function(item){
        $scope.items = item.data;
      });
    }
})();
