// home功能路由
angular.module('home.route', [ 'home.controller','home.services'])
  .config(function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider
      .state('tab.home', {
        url: '/home',
        views: {
          'tab-home': {
            templateUrl: 'areas/home/home.html',
            controller: 'HomeCtrl',
          }
        }
      })

  });
