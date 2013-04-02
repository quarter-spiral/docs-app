'use strict';


//Declare app level module which depends on filters, and services
angular.module('docsApp', ['docsApp.filters', 'docsApp.services', 'docsApp.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/faqs', {templateUrl: 'partials/faqs.html', controller: 'FAQsCtrl'});
    $routeProvider.when('/documentation/:currentSection', {templateUrl: 'partials/documentation/index.html', controller: 'DocumentationCtrl'});
    $routeProvider.otherwise({redirectTo: '/documentation/overview'});
}])