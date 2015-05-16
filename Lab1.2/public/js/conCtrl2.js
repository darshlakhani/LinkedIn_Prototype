function conCtrl2($scope, $http,$location)
{
  $scope.init1= function(){
   $http({
    method:"POST",
    url:"/connectdet2",
    
   }).success(function(response){
     $scope.conne2 = response;
   }).error(function(error){
   });
  };
}