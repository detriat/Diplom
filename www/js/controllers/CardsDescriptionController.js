(function(){
    'use strict';

    angular.module('app').controller('CardsDescriptionController', CardsDescriptionController);

    CardsDescriptionController.$inject = ["$scope", "$rootScope","List"];

    function CardsDescriptionController ($scope, $rootScope, List) {
      $scope.query = {
        order: "name",
        limit: 10,
        page: 1
      };

      List.items.get($scope.query, function(item){
        $scope.items = item.data;
      });

      
    }
})();
