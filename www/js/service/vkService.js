(function(){
    'use strict';

    angular.module('app').factory('vkAuth', vkAuth);

    vkAuth.$inject = ["$resource"];

    function vkAuth ($resource) {
      var host = "185.104.11.151:1280";
      return $resource ('http://'+host+'/Auth:id', {id: '@id'})


    }
})();
