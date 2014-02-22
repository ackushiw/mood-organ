'use strict';


<<<<<<< HEAD
moodApp.controller('MainCtrl', function($scope) {
          $scope.post = {url: 'http://', title: ''};
        });
=======
angular.module('moodOrganApp')
  .controller('MainCtrl', function ($scope) {
    $scope.mood = {
      author: '',
      decription: '',
      id: '',
      rating: 0,
      shared: 0,
      tag: '#',
      time: '',
      title: ''
    };
    $scope.post = {url: 'http://', title: ''};
	});
>>>>>>> e7fe0e89bfd60188c3ea98e0e73529ab6a387b0e
