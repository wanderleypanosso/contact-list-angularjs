angular.module('contactListApp')
  .factory('contactStore', function(){
    var contacts =  [
                      {
                        _id: '16996000581',
                        name: 'Wanderley Panosso',
                        phone: '16996000581',
                        email: 'wanderley.panosso@gmail.com',
                        address:'Rua Nelson Spelman Street, Jaboticabal, SP, Brazil'
                      },
                      {
                        _id: '16997696895',
                        name: 'Carolina Aguiar',
                        phone: '16997696895',
                        email: 'carol@hotmail.com',
                        address: 'Rua Floriano Peixoto, 100, Ribeirao Preto, SP, Brazil'
                      },
                      {
                        _id: '16993432206',
                        name: 'Pedro Paulo',
                        phone: '16993432206',
                        email: 'pedro@hotmail.com',
                        address: 'Rua Rio Branco, 110, Jaboticabal, SP, Brazil'
                      },
                      {
                        _id: '16997443359',
                        name: 'Joao Jose',
                        phone: '16997443359',
                        email: 'joao@gmail.com',
                        address: 'Rua Alfredo Pinheiros, 330, Taquaritinga, SP, Brazil'
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
          return JSON.parse(JSON.stringify(contacts[i]));
        }
      }
      return null;
    }

    factory.save = function(contact){
      if (!contact._id){
        contacts.push(contact);
        contact._id = contact.phone;
      }
      else {
        factory.remove(contact._id);
        contacts.push(contact);
      }
      return contact;
    }

    factory.remove = function(contactId){
      var i, len = contacts.length;
      for (i = 0; i < len; i++) {
        if (contacts[i]._id == contactId) {
          return contacts.splice(contacts.indexOf(contacts[i]), 1)[0];
        }
      }
    }

    return factory;
  })
