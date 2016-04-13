(function(){
    'use strict';

    angular.module('app').controller('menuCardsController', menuCardsController);

    menuCardsController.$inject = ["$scope", "$rootScope", "List", "$cookies"];

    function menuCardsController ($scope, $rootScope, List, $cookies) {

      $scope.query = {
        order: "name",
        limit: 10,
        page: 1
      };

      if (typeof($cookies.getObject("cart"))!="undefined") {
        $scope.cart = $cookies.getObject("cart");
      }else{
        $scope.cart = {
          items: []
        };
      }



      $scope.add_tocart = function (item) {

        var obj = {
          id: item.id,
          price: item.price,
          ingri: item.ingri,
          op: item.op,
          title: item.title,
          kolvo: 1,
        }

        var check = false;

        $scope.cart.items.forEach(function(it){
            if (it.id == obj.id) check = true;
        });
        console.log(check);
        if (!check) $scope.cart.items.push(obj);

        $cookies.putObject("cart", $scope.cart);
        console.log($scope.cart);
      }

      List.items.get($scope.query, function(item){
        $scope.items = item.data;
      });
    }
})();
