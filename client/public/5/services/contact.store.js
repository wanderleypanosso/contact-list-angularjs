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
      for (var i = 0; i < contacts.length; i++) {
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
