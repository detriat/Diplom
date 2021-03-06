(function(){
    'use strict';

    angular.module('app').controller('menuCardsController', menuCardsController);

    menuCardsController.$inject = ["$scope", "$rootScope", "List", "$cookies"];

    function menuCardsController ($scope, $rootScope, List, $cookies) {
      $rootScope.cartShow = false;
      $rootScope.cartHide = true;

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
      console.log($scope.cart);


      $scope.add_tocart = function (item) {
        var obj = {
          id: item.id,
          price: item.price,
          ingri: item.ingri,
          op: item.op,
          title: item.title,
          kolvo: 1,
          img: item.image
        }
        var check = false;
        $scope.cart.items.forEach(function(it){
            if (it.id == obj.id) check = true;
        });
        if (!check) $scope.cart.items.push(obj);
        $cookies.putObject("cart", $scope.cart);
        $rootScope.cartShow = true;
        $rootScope.cartHide = false;
      }

      List.items.get($scope.query, function(item){
        $scope.items = item.data;
        $scope.items.forEach(function(item){
          item.image = item.images[0].src;
        })
      });
    }
})();
