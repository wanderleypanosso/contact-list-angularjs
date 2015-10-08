angular.module('contactListApp')
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
