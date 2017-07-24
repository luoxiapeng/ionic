// 首页面
angular.module('goodsList.route', ['goodsList.controller'])

  .config(function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider
      .state('goodsList', {
        url: '/goodsList/:typeNumber',
        templateUrl: 'areas/goodsList/goodsList.html',
        controller: 'GoodsListCtrl'
      })

  });
