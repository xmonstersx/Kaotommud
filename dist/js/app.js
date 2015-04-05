angular.module('blogdashApp', ['ngRoute'])
.config(function($routeProvider) {
	$routeProvider
		.when('/',{
			templateUrl:'partials/home.html',
			controller:'homeCtrl'
		})
		.when('/add',{
			templateUrl:'partials/add.html',
			controller:'addCtrl'
		})
		.when('/list',{
			templateUrl:'partials/list.html',
			controller:'listCtrl'
		})
		.when('/comment',{
			templateUrl:'partials/comment.html',
			controller:'commentCtrl'
		})
		.when('/media',{
			templateUrl:'partials/media.html',
			controller:'mediaCtrl'
		})
		.when('/stat',{
			templateUrl:'partials/stat.html',
			controller:'statCtrl'
		})
		.when('/user',{
			templateUrl:'partials/user.html',
			controller:'userCtrl'
		})
		.when('/setting',{
			templateUrl:'partials/setting.html',
			controller:'settingCtrl'
		})
})
.controller('blogdashCtrl', function($scope,$location){
	var defaultHeight = window.innerHeight;
	$scope.win_height = { 'height': defaultHeight + 'px'};
	if(defaultHeight < 768){
		$scope.win_height = { 'height': 768 + 'px'};
		defaultHeight = 768;
	}
	$(window).resize(function(){
		if(window.innerHeight > defaultHeight){
			$scope.win_height = { 'height': window.innerHeight + 'px'};
			$scope.$apply();
		}
	})

	$scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
})
.controller('homeCtrl', function($scope){
	
})
.controller('addCtrl', function($scope){
	
})
.controller('listCtrl', function($scope){
	
})
.controller('commentCtrl', function($scope){
	
})
.controller('mediaCtrl', function($scope){
	
})
.controller('statCtrl', function($scope){
	
})
.controller('userCtrl', function($scope){
	
})
.controller('settingCtrl', function($scope){
	
})