angular.module('contactListApp')
  .factory('contactStore', function($resource){

    var api = 'https://simtec-contact-list-api.herokuapp.com/api/contacts';
    //var api = 'http://localhost:8080/api/contacts';

    var contactApi = $resource(api + '/:id', {},{
      //'query':  { method:'GET', isArray:true },
      //'remove': { method: 'DELETE' },
      'update': { method: 'PUT' },
      //'save': { method: 'POST' }
    });

    var factory = {};

    factory.getAll = function(){
      return contactApi.query();
    }

    factory.getById = function(contactId){
      return contactApi.get({ id: contactId });
    }

    factory.save = function(contact){
      if (!contact._id){
        return contactApi.save({}, contact);
      }
      else {
        return contactApi.update({ id: contact._id }, contact);
      }
    }

    factory.remove = function(contactId){
      return contactApi.remove({ id: contactId });
    }

    return factory;
  })
