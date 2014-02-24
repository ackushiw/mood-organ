'use strict';

angular.module('moodOrganApp')
.controller('MainCtrl', function ($scope, syncData, moodPath) {
  $scope.emptyMood = {
    author: '',
    decription: '',
    id: '',
    rating: 0,
    shared: 0,
    tag: '#',
    time: '',
    title: ''
  };
  //syncData is defined in services/firebase.js, it is the easiest way to get at the data. moodPath is a constant defined in angularfire/config.js
  $scope.moodlist = syncData(moodPath, 10);
  
  //not used for now.
  $scope.addMood = function() {
    $scope.moodlist.push({
      from: $scope.name,
      id: $scope.idnumber,
      body: $scope.mood
    });
    $scope.mood = $scope.emptyMood;
  };
});

