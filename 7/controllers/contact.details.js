angular.module('contactListApp')
  .controller('ContactDetailsController', function($scope, $routeParams, $location, contactStore){

    var contactId = $routeParams.id || null;
    if (contactId){
      $scope.person = contactStore.getById(contactId);
      if (!$scope.person){
        $location.path('/');
      }
      else {
        $scope.isEditing = true;
      }
    }
    else {
      $scope.person = {};      
    }

    $scope.canSave = function(){
      return $scope.formPerson.$valid;
    }

    $scope.doSave = function(){
      contactStore.save($scope.person);
      $scope.person = {};
      $location.path('/');
    }

    $scope.doCancel = function(){
      $location.path('/');
    }
  })
