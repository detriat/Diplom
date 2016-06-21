(function(){
    'use strict';

    angular.module('app').factory('List', List);

    List.$inject = ["$resource"];

    function List ($resource) {
      var host = "185.104.11.151:1280";
  //  var host = "localhost";
      return {
          items: $resource ('http://'+host+'/Items/list/:id', {id: '@id'}),
          buy: $resource ('http://'+host+'/Orders/instapay:id', {id: '@id'})
      };
    }
})();
