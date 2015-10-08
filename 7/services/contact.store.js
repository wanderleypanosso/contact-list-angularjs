angular.module('contactListApp')
  .factory('contactStore', function(contactApi){

    var contacts = [];

    var factory = {};

    factory.getAll = function(){
      contacts.$promise = contactApi.query(function(response){
        contacts.splice(0, contacts.length);
        response.forEach(function(data){
          contacts.push(data);
        });
        return contacts;
      }).$promise;
      return contacts;
    }

    factory.getById = function(contactId){
      for (var i = 0; i < contacts.length; i++) {
        if (contacts[i]._id == contactId) {
          var contact = JSON.parse(JSON.stringify(contacts[i]));
          contact.$promise = contactApi.get({'id': contactId}, function(data){
            for (var key in data) {
              contact[key] = data[key];
            }
            return contact;
          }).$promise;

          return contact;
        }
      }
      return null;
    }

    factory.save = function(contact){
      if (!contact._id){
        contact.$promise = contactApi.save({ id: contact._id }, contact, function(data){

          for (var i = 0; i < contacts.length; i++) {
            if (contacts[i]._id == data._id){
              contacts.splice(contacts.indexOf(contacts[i]), 1);
              i--;
            }
          }

          contacts.push(data);
        }).$promise;
      }
      else {
        contact.$promise = contactApi.update({ id: contact._id }, contact, function(data){


          for (var i = 0; i < contacts.length; i++) {
            if (contacts[i]._id == data._id){
              contacts.splice(contacts.indexOf(contacts[i]), 1);
              i--;
            }
          }

          contacts.push(data);
        }).$promise;
      }
      return contact;
    }

    factory.remove = function(contactId){
      for (var i = 0; i < contacts.length; i++) {
        if (contacts[i]._id == contactId) {
          return contactApi.remove({'id': contactId}, function(){
            return contacts.splice(contacts.indexOf(contacts[i]), 1)[0];
          }).$promise;
        }
      }
    }

    return factory;
  })
