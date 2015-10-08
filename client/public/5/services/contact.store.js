angular.module('contactListApp')
  .factory('contactStore', function(){
    var contacts =  [
                      {
                        _id: '16996000581',
                        name: 'Wanderley Panosso',
                        phone: '16996000581',
                        email: 'wanderley.panosso@gmail.com',
                        address:'Nelson Spelman Street, 141, Jaboticabal, SP, Brazil'
                      },
                      {
                        _id: '16997696895',
                        name: 'Emerson Aquino',
                        phone: '16997696895',
                        email: 'emerson@hotmail.com',
                        address: 'Floriano Peixoto Street, 100, Catanduva, SP, Brazil'
                      },
                      {
                        _id: '16993432206',
                        name: 'Murilo Panosso',
                        phone: '16993432206',
                        email: 'murilo@hotmail.com',
                        address: 'Rio Branco Street, 110, Jaboticabal, SP, Brazil'
                      },
                      {
                        _id: '16997443359',
                        name: 'Jederson Zuchi',
                        phone: '16997443359',
                        email: 'jederson@gmail.com',
                        address: 'Alfredo Pinheiros Street, 330, Monte Alto, SP, Brazil'
                      }
                    ];

    var factory = {};

    factory.getAll = function(){
      return contacts;
    }

    factory.getById = function(contactId){
      var i, len = contacts.length;
      for (i = 0; i < len; i++) {
        if (contacts[i]._id == contactId) {
          return contacts[i];
        }
      }
      return null;
    }

    factory.save = function(contact){
      contacts.push(contact);
      contact._id = contact.phone;
      return contact;
    }

    factory.remove = function(contactId){
      var contact = factory.getById(contactId);
      if (contact)
        return contacts.splice(contacts.indexOf(contact), 1)[0];
    }

    return factory;
  })
