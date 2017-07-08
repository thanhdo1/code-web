app.controller('TrangChuController', function($scope, $http) {
    $http.get(API + 'index')
    .success(function (response) 
    	{$scope.names = response});
});