angular.module('App')
.controller('RestaurantsController', function($scope, $http,$ionicLoading){
  $scope.page = 0;
  $scope.total = 1;
  $scope.restaurants =[];

  $scope.getRestaurants = function(){
    $scope.page++;
    $ionicLoading.show();
    $http.get('https://ionic-in-action-api.herokuapp.com/restaurants?age='+$scope.page)
    .success(function(response){
      $ionicLoading.hide();
      angular.forEach(response.restaurants,function(restaurant){
        $scope.restaurants.push(restaurant);
      });

      $scope.total = response.totalPages;
      $scope.$broadcast('scroll.infiniteScrollComplete');
    }).error(function(err){
      $scope.$broadcast('scroll.infiniteScrollComplete');
      console.log(err);
    });
  };

  $scope.getRestaurants();
})
