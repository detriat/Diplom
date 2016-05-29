(function(){
    'use strict';

    angular.module('app').factory('vkAuth', vkAuth);

    vkAuth.$inject = ["$resource"];

    function vkAuth ($resource) {
      var host = "127.0.0.1";
      return $resource ('http://'+host+'/Auth:id', {id: '@id'})


    }
})();
