(function(){
    'use strict';

    angular.module('app').factory('Orders', Orders);

    Orders.$inject = ["$resource"];

    function Orders ($resource) {
      return {
          items: $resource ('https://www.liqpay.com/api/3/checkout', {id: '@id'})
      };
    }
})();
