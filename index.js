var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
      .when('/first', {
          templateUrl: 'first.html',
          controller: 'indexController1'
      })
      .when('/second', {
          templateUrl: 'second.html'
      })
      .otherwise({
          redirectTo: '/'
      });
});

app.controller('indexController1', function ($scope) {

});

app.controller('indexController2', function ($scope, $routeParams) {
alert(1);
});
app.controller('chilll',function($scope,$routeParams){
    alert(2);
});