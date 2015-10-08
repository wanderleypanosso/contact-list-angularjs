angular.module('contactListApp')
  .factory('contactApi', function($resource){
    var api = 'https://simtec-contact-list-api.herokuapp.com/api/contacts';
    //var api = 'http://localhost:8080/api/contacts';

    return $resource(api + '/:id', {},{
      'query':  { method:'GET', isArray:true },
      'remove': { method: 'DELETE' },
      'update': { method: 'PUT' },
      'create': { method: 'POST' }      
    });
  })
