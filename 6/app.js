angular.module('contactListApp',[
  'ui.mask',
  'ngRoute'
])
.config(function($routeProvider){
  $routeProvider
    .when('/contacts',{
        templateUrl: 'views/contact-list.html',
        controller: 'ContactListController'
    })
    .when('/contacts/new',{
        templateUrl: 'views/contact-details.html',
        controller: 'ContactDetailsController'
    })
    .when('/contacts/edit/:id',{
        templateUrl: 'views/contact-details.html',
        controller: 'ContactDetailsController'
    })
    .otherwise({
        redirectTo: '/contacts'
    });
})
