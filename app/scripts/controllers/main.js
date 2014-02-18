'use strict';

angular.module('moodOrganApp', ["firebase"])
    .controller('MainCtrl', function(firebaseRef) {
          var ref = firebaseRef('/mood-library');
        });