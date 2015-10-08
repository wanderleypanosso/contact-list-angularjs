angular.module('contactListApp',['ui.mask'])
  .controller('ContactListController', function($scope){
      $scope.people = [
                        {
                          name: 'Wanderley Panosso',
                          phone: '16996000581',
                          email: 'wanderley.panosso@gmail.com',
                          address:'Nelson Spelman Street, 141, Jaboticabal, SP, Brazil'
                        },
                        {
                          name: 'Emerson Aquino',
                          phone: '16997696895',
                          email: 'emerson@hotmail.com',
                          address: 'Floriano Peixoto Street, 100, Catanduva, SP, Brazil'
                        },
                        {
                          name: 'Murilo Panosso',
                          phone: '16993432206',
                          email: 'murilo@hotmail.com',
                          address: 'Rio Branco Street, 110, Jaboticabal, SP, Brazil'
                        },
                        {
                          name: 'Jederson Zuchi',
                          phone: '16997443359',
                          email: 'jederson@gmail.com',
                          address: 'Alfredo Pinheiros Street, 330, Monte Alto, SP, Brazil'
                        }
                      ];

      $scope.newPerson = {};

      $scope.canAdd = function(){
        return $scope.formPerson.$valid;
      }

      $scope.doAdd = function(){
        $scope.people.push($scope.newPerson);
        $scope.newPerson = {};
      }

      $scope.doRemove = function(person){
        $scope.people.splice($scope.people.indexOf(person), 1);
      }

  })
  .filter('phone', function(){
    return function (input, mask){
      var m = 0, i = 0, result = '';
      while (m < mask.length){
        if (mask[m] !== '9'){
          result += mask[m];
        }
        else if (mask[m] === '9'){
          if (!isNaN(input[i]))
            result += (input[i] ? input[i] : '');
          i++;
        }
        m++;
      }
      return result;
    }
  })
