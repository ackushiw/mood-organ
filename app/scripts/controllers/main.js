'use strict';


<<<<<<< HEAD
moodApp.controller('MainCtrl', function($scope) {
          $scope.post = {url: 'http://', title: ''};
        });
=======
angular.module('moodOrganApp')
<<<<<<< HEAD
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
=======
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
>>>>>>> ec4867b4e3d6c831c48010b5f1e0461e8d5f5cb9
