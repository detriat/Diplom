(function(){
    'use strict';

    angular.module('app').controller('MenuCartController', MenuCartController);

    MenuCartController.$inject = ["$scope", "$rootScope","List", "$cookies", "$timeout", "$sce"];

    function MenuCartController ($scope, $rootScope, List, $cookies, $timeout, $sce) {
      $scope.sizes = [1,2,3,4,5,6,7,8,9,10];
      $scope.renderHtml = function (htmlCode) {
          return $sce.trustAsHtml(htmlCode);
      };
      $scope.item_kolvo = 1;
      $scope.kolvo = function(){
        recalc();
      }
      $scope.delete_forCart = function(index){
        $scope.cart.items.splice(index, 1);
        $cookies.putObject("cart", $scope.cart);
        recalc();
      }

      function recalc () {
                console.log($scope.cart.items);
        $scope.total = 0;
        $scope.cart.items.forEach(function(item){
          $scope.total += item.price * item.kolvo;
        });

      }
      if (typeof($cookies.getObject("cart"))!="undefined"){
        $scope.cart = $cookies.getObject("cart");
        recalc();
      }

      $scope.buy = function() {
          var arr = [];

          $scope.cart.items.forEach(function(zak) {
            var obj = {
              id: zak.id,
              price: zak.price,
              kolvo: zak.kolvo
            }
            arr.push(obj);
          });

          var order = {
            buys: arr
          };


          List.buy.get({buys:arr}, function(item){
            console.log(item);
            $scope.payer = item.html;
            $timeout( function () {
              angular.element(document.querySelectorAll('#pu form')).attr('name', "hui");
             document.forms["hui"].submit()
           }, 10);
          });

      }

    }
})();
