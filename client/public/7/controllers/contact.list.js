angular.module('contactListApp')
  .controller('ContactListController', function($scope, contactStore){
      $scope.people = contactStore.getAll();

      $scope.doRemove = function(person){
        contactStore.remove(person._id).$promise.then(function(){
          $scope.people.splice(person, 1);
        });
      }

  })
