var app = angular.module('mainApp',['ngRoute','ngCookies']);

app.config(function($routeProvider,$locationProvider){
	

	$routeProvider
	.when('/register',{
		templateUrl: 'user/pages/registerUser.html',
		controller:'userController'
	})
	.when('/login',{
		templateUrl: 'user/pages/login.html',
		controller:'userController'
	})
	.when('/home',{
		templateUrl: 'home/home.html'
	})
.when('/profilepic',{
		templateUrl: 'user/pages/profilepic.html',
		controller:'userController'
	})
	.when('/edituser',{
		templateUrl: 'user/pages/edituserform.html',
		controller:'editController'
	})
.when('/addjob',{
		templateUrl: 'job/pages/jobform.html',
		controller:'jobController'
	})
	
	.when('/getalljobs',{
		templateUrl: 'job/pages/getjobtitle.html',
		controller:'jobController'
	})
	
	.when('/addpost',{
		templateUrl: 'blog/pages/blogForm.html',
		controller:'blogController'
	})
	.when('/getallblogs',{
		templateUrl: 'blog/pages/getblogtitle.html',
		controller:'blogController'
	})
	.when('/getblogdetail/:id',{
		templateUrl: 'blog/pages/getblogdetail.html',
		controller:'blogDetailController'
	})
	
	.when('/getallusers',{
		templateUrl: 'friend/pages/userslist.html',
		controller:'friendController'
	})
	.when('/pendingrequests',{
		templateUrl: 'friend/pages/pendingrequests.html',
		controller:'friendController'
	})
	
	.when('/listoffriends',{
		templateUrl: 'friend/pages/friendslist.html',
		controller:'friendController'
	})
	.when('/chat',{
		templateUrl: 'chat/pages/chat.html',
		controller:'chatController'
	})
	
	.otherwise({
		redirectTo: '/home'
	});
	
});

app.run(function($rootScope,$cookieStore,userService,$location){
	
	 if($rootScope.currentUser == undefined){
		   $rootScope.currentUser = $cookieStore.get("currentUser");
	 }
	 
	 $rootScope.logout = function(){
		 
		   delete $rootScope.currentUser;
		   $cookieStore.remove("currentUser");
		   console.log("inside logout");
		   
		   userService.logout()
		         .then(function(resp){
		        	 
		        	 console.log(resp.data);
		        	 $rootScope.message = "logged out sucessfully";
		        	 $location.path('/login');
		        	 
		        	 console.log($rootScope.message);
		         },function(resp){
		        	 console.log(resp.data);
		         });
	 }
	 $('li').click(function(){
		  $('li').removeClass('active');
		  $(this).addClass('active');
	 });
});