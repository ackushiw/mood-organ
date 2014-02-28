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

  
    $scope.addMood = function() {
    	//changed from push to add as came up with errors
        $scope.moodlist.$add({
        	//test fields
            //from: $scope.auth.user.username,
            //id: $scope.idnumber,
            //body: $scope.mood

            //final fields
            from: $scope.auth.user.username,
            decription: $scope.mood,
            id: $scope.idnumber,
            rating: 0,
            shared: 0,
            tag: $scope.hash,
            //this would be the timestamp of the add to firebase
            time: new Date(),
            title: $scope.mood
        });
        $scope.mood = $scope.emptyMood;
  };
});

