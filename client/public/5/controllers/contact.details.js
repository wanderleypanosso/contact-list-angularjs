angular.module('contactListApp')
  .controller('ContactDetailsController', function($scope, contactStore){

    $scope.newPerson = {};

    $scope.canAdd = function(){
      return $scope.formPerson.$valid;
    }

    $scope.doAdd = function(){
      contactStore.save($scope.newPerson);
      $scope.newPerson = {};
    }
  })
