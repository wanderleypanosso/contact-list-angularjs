angular.module('contactListApp')
  .controller('ContactDetailsController', function($scope, $routeParams, $location, contactStore){
    var contactId = $routeParams.id || null;
    if (contactId){
      contactStore.getById(contactId).$promise.then(function(data){
        if (!data){
          $location.path('/');
        }
        else {
          $scope.isEditing = true;
          $scope.person = data;
        }
      });
    }
    else {
      $scope.person = {};
    }

    $scope.canSave = function(){
      return $scope.formPerson.$valid;
    }

    $scope.doSave = function(){
      contactStore.save($scope.person).$promise.then(function(){
        $scope.person = {};
        $location.path('/');
      });
      $scope.doSave = function(){};
    }

    $scope.doCancel = function(){
      $location.path('/');
    }
  })
