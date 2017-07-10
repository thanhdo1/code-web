/*app.controller('TrangChuController', function($scope, $http) {
    $http.get(API + 'index')
    .success(function (response) 
    	{$scope.names = response});
});*/
app.controller('TrangChuController', function($scope, $http) {
    $http.get(API + 'list')
    .success(function (response) 
    	{$scope.names = response});
});
/*app.controller('PhotoController', ['$scope', 'sanpham', '$routeParams', function($scope, photos, $routeParams) {
  photos.success(function(data) {
  
    $scope.names = data;

  });
}]);
*/