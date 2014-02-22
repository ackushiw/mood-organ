'use strict';


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