angular.module('app').controller('MainController', function($scope, MainService){

  $scope.getQuotes = function(){
    $scope.quotes = MainService.getQuotes();
  }
  $scope.addQuotes = function(){
    MainService.addQuotes($scope.quote);
  }
  $scope.removeQuotes = function(q){
    MainService.removeQuotes(q);
  }
  $scope.delete = function(i){
    MainService.delete(i);
  }
  $scope.getQuotes();

});
