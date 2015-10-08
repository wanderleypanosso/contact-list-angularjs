angular.module('contactListApp',['ui.mask'])
  .controller('ContactListController', function($scope){
      $scope.people = [
                        {
                          name: 'Wanderley Panosso',
                          phone: '16996000581',
                          email: 'wanderley.panosso@gmail.com',
                          address:'Rua Nelson Spelman Street, Jaboticabal, SP, Brazil'
                        },
                        {
                          name: 'Carolina Aguiar',
                          phone: '16997696895',
                          email: 'carol@hotmail.com',
                          address: 'Rua Floriano Peixoto, 100, Ribeirao Preto, SP, Brazil'
                        },
                        {
                          name: 'Pedro Paulo',
                          phone: '16993432206',
                          email: 'pedro@hotmail.com',
                          address: 'Rua Rio Branco, 110, Jaboticabal, SP, Brazil'
                        },
                        {
                          name: 'Joao Jose',
                          phone: '16997443359',
                          email: 'joao@gmail.com',
                          address: 'Rua Alfredo Pinheiros, 330, Taquaritinga, SP, Brazil'
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
