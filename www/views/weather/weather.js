angular.module('App')
.controller('WeatherController',function($scope,$http,$ionicLoading){
  var direction = ['N','NE','E','SE','S','SW','W','NW'];

  $ionicLoading.show();
  $http.get('https://ionic-in-action-api.herokuapp.com/weather')
  .success(function(weather){
    $scope.weather = weather;
    $ionicLoading.hide();
  }).error(function(err){
    $ionicLoading.show({
      template: 'Could not load weather. Please try agin later.',
      duration: 3000
    });
  });

  $scope.getDirection = function(degree){
    if (degree > 338) {
      degree = 360 - degree;
    }
    var index = Math.floor((degree+22)/45);
    return directions[index];
  }
});
