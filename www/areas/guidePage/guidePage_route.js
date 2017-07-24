// 总路由模块
angular.module('guidePage.route', [ 'guidePage.controller','guidePage.services'])
  .config(function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider
      .state('guidePage', {
        url: '/guidePage',
        templateUrl: 'areas/guidePage/guidePage.html',
        controller: 'GuidePageCtrl'
        //views: {
        //  'tab-dash': {
        //    templateUrl: 'areas/first/first.html',
        //    controller: 'FirstCtrl'
        //  }
        //}
      })

  });
