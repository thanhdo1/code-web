/*app.controller('LoaiController', function($scope, $http) {
    $http.get(API + 'loai')
    .success(function (response) 
    	{$scope.loais = response});
});*/
app.controller('customersCtrl', function($scope, $http) {
    $http.get("customers_sql.aspx")
    .then(function (response) {$scope.names = response.data.records;});
});