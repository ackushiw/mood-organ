'use strict';

angular.module('moodOrganApp')
.controller('MainCtrl', function ($scope, syncData, moodPath) {
  $scope.emptyMood = {
    created: '',
    decription: '',
    from: '',
    id: '',
    rating: 0,
    shared: 0,
    tag: '#',
    title: ''
  };
  //the search mood list should be the most recent, incorporating whatever is put in the search box
  // this will eventually be a search query to elastic search
  $scope.searchMoodlist = syncData(moodPath, 10);
  
  // this will be a search for the top shared moods over the last week/day/hour whatever (number of shares within a particular timeframe)
  // this is also possible in elastic search
  $scope.sharedMoodlist = syncData(moodPath, 5);
  
  // again this will be something similar, the highest rated mood in the recent history
  $scope.ratedMoodlist = syncData(moodPath, 5);

  $scope.latestMoodlist = syncData(moodPath, 5);
  
  $scope.addMood = function() {
    //changed from push to add as came up with errors
    $scope.searchMoodlist.$add({
      created: new Date(),
      decription: $scope.info,
      from: $scope.auth.user.username,
      id: $scope.idnumber,
      rating: 0,
      shared: 0,
      tag: $scope.hash,
      title: $scope.mood
    });
    $scope.mood = $scope.emptyMood;
  };
});

