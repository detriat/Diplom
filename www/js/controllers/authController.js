(function(){
    'use strict';

    angular.module('app').controller('authController', authController);

    authController.$inject = ["$scope", "$rootScope", "vkAuth", "$window"];

    function authController ($scope, $rootScope, vkAuth, $window) {


      $scope.vkauth = function(){
        vkAuth.get({}, function(item){
          console.log(item);
          $window.location.href = item.url;
        //  $location.path(item.url);
        });
      }


      /*var VK = require('vksdk');
      var vk = new VK({
          'appId'     : '5465925',
          'appSecret' : '2fRdBKStiweYARM4plo2',
          'language'  : 'ru'
      });
      */
    }
})();
