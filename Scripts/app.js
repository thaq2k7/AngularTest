//var eventsApp = angular.module('eventsApp', ['ngSanitize', 'ngResource'])

var eventsApp = angular.module('eventsApp', ['ngSanitize', 'ngResource', 'ngRoute'])
.config(function ($routeProvider) {
    $routeProvider.when('/newEvent',
        {
            templateUrl: 'MyView.html',
            controller: 'EventController'
        });
});

var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  'phonecatControllers'
]);


phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
     when('/phones', {
        templateUrl: '../templates/phone-list.html',
        controller: 'PhoneListCtrl'
      }).
     when('/phones/:phoneId', {
         templateUrl: '../templates/phone-detail.html',
        controller: 'PhoneDetailCtrl'
     }).
      otherwise({
        redirectTo: '/phonesz'
     });
  }]);


//.factory('myCache', function ($cacheFactory) {
//    return $cacheFactory('myCache', { capacity: 3 });
//});