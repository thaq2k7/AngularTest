var phonecatControllers = angular.module('phonecatControllers', []);
 
phonecatControllers.controller('PhoneListCtrl', ['$scope', '$http', '$location',
  function ($scope, $http, $location) {
      $http.get('phones/phones.json').success(function (data) {
          $scope.phones = data;
      });

      $scope.orderProp = 'age';
      
  }]);
 
phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams',
  function ($scope, $routeParams) {
      $scope.phoneId = $routeParams.phoneId;
  }]);
