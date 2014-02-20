'use strict';


moodApp.controller('MoodOrganController', function ($scope) {
    $scope.mood = {
    	id: '',
    	title: '',
    	decription: '',
    	author: '',
    	time: '',
    	tag: '#'
    	rating: 0,
    	shared: 0,
    };
  });
