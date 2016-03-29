// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic', 'ionic-material', 'ngAria', 'ngMaterial']);

app.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)

        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })

    .state('app.lists', {
        url: '/lists',
        views: {
            'menuContent': {
                templateUrl: 'templates/lists.html',
                controller: 'ListsCtrl'
            }
        }
    })

    .state('app.ink', {
        url: '/ink',
        views: {
            'menuContent': {
                templateUrl: 'templates/ink.html',
                controller: 'InkCtrl'
            }
        }
    })

    .state('app.motion', {
        url: '/motion',
        views: {
            'menuContent': {
                templateUrl: 'templates/motion.html',
                controller: 'MotionCtrl'
            }
        }
    })

    .state('app.components', {
        url: '/components',
        views: {
            'menuContent': {
                templateUrl: 'templates/components.html',
                controller: 'ComponentsCtrl'
            }
        }
    })
    .state('app.tables', {
        url: '/tables',
        views: {
            'menuContent': {
                templateUrl: 'templates/tables.html',
                controller: 'TablesController'
            }
        }
    })
    .state('app.ourmenu', {
        url: '/ourmenu',
        views: {
            'menuContent': {
                templateUrl: 'templates/OurMenu.html',
                controller: 'OurMenuController'
            }
        }
    })
    .state('app.cards_menu', {
        url: '/cards_menu',
        views: {
            'menuContent': {
                templateUrl: 'templates/menu_cards.html',
                controller: 'menuCardsController'
            }
        }
    })
    .state('app.cards_description', {
        url: '/cards_description',
        views: {
            'menuContent': {
                templateUrl: 'templates/cards_description.html',
                controller: 'CardsDescriptionController'
            }
        }
    })
    .state('app.start', {
        url: '/start',
        views: {
            'menuContent': {
                templateUrl: 'templates/start.html',
                controller: 'StartController'
            }
        }
    })
    .state('app.extensions', {
        url: '/extensions',
        views: {
            'menuContent': {
                templateUrl: 'templates/extensions.html',
                controller: 'ExtensionsCtrl'
            }
        }
    })
    ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/start');
});
