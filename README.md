Contact List em AngularJS + API Node & MongoDB - SIMTEC 2015
===========

Live Demo: https://contact-list-angularjs.herokuapp.com
----

Contact List utilizando:
----
* API
  * MongoDB v3
  * Node v4
  * Express v4

* Clients
  * Bootstrap v3
  * AngularJS v1.4.7
  * Node v4
  * Express v4  

Funcionalidades:
----

* Add Contacts
* Edit Contacts
* Remove Contacts
* Filter Contacts

Autor
----

* Wanderley Panosso
    * YouTube: http://tiny.cc/wanderleypanosso
    * Twitter: https://twitter.com/wanderley_dpj
    * Facebook: https://www.facebook.com/wanderley.panosso.jr

Mais informações
----

* https://www.facebook.com/desvendeangularjs

* https://www.angularjs.org/
* https://www.mongodb.org/
* https://nodejs.org/
* http://expressjs.com/
* http://getbootstrap.com/


Dependências
----
  * API
    * MongoDB rodando em "mongodb://localhost:27017/contacts"
    * Veja api/package.json

  * Client
    * Veja api/package.json

Instalação do App
----
- git clone https://github.com/wanderleypanosso/contact-list-angularjs.git

- API
    * cd contact-list-angularjs/api
    * npm install
    * node server.js

Edite a variável `mongoUri` no arquivo api/server.js para alterar a conexão com o MongoDB.

- Client
    * cd contact-list-angularjs/client
    * npm install
    * node app.js
    * Navegue para http://localhost:3000/{1, 2, 3, 4, 5, 6, 7}/index.html

Edite a variável `api` no arquivo client/public/7/services/contact.store.js para alterar a conexão com o Backend.
