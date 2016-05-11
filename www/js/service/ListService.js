(function(){
    'use strict';

    angular.module('app').factory('List', List);

    List.$inject = ["$resource"];

    function List ($resource) {
      var host = "127.0.0.1";
      return {
          items: $resource ('http://'+host+'/Items/list/:id', {id: '@id'}),
          buy: $resource ('http://'+host+'/Orders/instapay:id', {id: '@id'})
      };
    }
})();
