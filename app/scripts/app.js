'use strict';
/* global moodApp:true */

var moodApp = angular.module('moodOrganApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'angularfire.login',
  'firebase',
  'ngAnimate'
]);
moodApp.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/login', {
      authRequired: false, // if true, must log in before viewing this page
      templateUrl: 'views/login-modal.html',
      controller: 'LoginCtrl'
    })
    .when('/creation', {
      authRequired: false, // if true, must log in before viewing this page
      templateUrl: 'views/mood-creation.html',
      controller: 'MainCtrl'
    })
    .otherwise({
        redirectTo: '/'
      });
});
moodApp.run(['simpleLogin', '$rootScope', 'FBURL', function(simpleLogin, $rootScope, FBURL) {
      // establish authentication
      $rootScope.auth = simpleLogin.init('/login');
      $rootScope.FBURL = FBURL;
    }
]);
