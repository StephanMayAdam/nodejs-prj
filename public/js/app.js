angular.module('myApp', ['myApp.filters','myApp.directives','myApp.services','ui.bootstrap']).
config(['$routeProvider', function($routeProvider) {
 
  $routeProvider.when('/view1', {templateUrl: 'settings_tpl.html'});
  $routeProvider.when('/view2', {templateUrl: 'images_tpl.html'});
  $routeProvider.when('/main', {templateUrl: 'main.html'});
  $routeProvider.otherwise({redirectTo: '/main'});
}]);

// directives 
angular.module('myApp.directives', []).
directive('appVersion', ['version', function(version) {
  return function(scope, elm, attrs) {
    elm.text(version);
  };
}])

// filters 
angular.module('myApp.filters', []).
filter('interpolate', ['version', function(version) {
  return function(text) {
	  console.log('set version');
    return String(text).replace(/\%VERSION\%/mg, version);
  }
}]);

// services 
angular.module('myApp.services', []).
value('version', 'v.0.1');
