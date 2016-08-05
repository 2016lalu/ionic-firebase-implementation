angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    //alert('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('categoryCtrl', function($scope) {
  $scope.categoryList = [
    { name: 'A', desc: 'Apps' },
    { name: 'B', desc: 'bussiness' },
    { name: 'C', desc: 'Computer' },
    { name: 'D', desc: 'DataBase' },
    { name: 'G', desc: 'google' },
    { name: 'H', desc: 'Health' },
    { name: 'M', desc: 'marketing' },
    { name: 'T', desc: 'Technology' }
  ];

 $scope.close = function(){ ionic.Platform.exitApp();}



})
.controller('homeCtrl', function($scope) {
   
   
       $scope.load = function(){
			  $scope.aksQus = JSON.parse(localStorage.getItem("aksData"));
		}
      
    //console.log($scope.aksQus); 
    
		$scope.newTask = function(){
			   $scope.formShow = true;
		}
		$scope.cancel = function(){
			   $scope.formShow = false;
		}
		
		$scope.submit = function(enterQues){
			  
			   $scope.aksOld = JSON.parse(localStorage.getItem("aksData")) || [];
			   $scope.ansNew = {};
			   $scope.ansNew.questions = enterQues;
			   $scope.aksOld.push($scope.ansNew);
			   
			   localStorage.setItem('aksData', JSON.stringify($scope.aksOld));
			   $scope.enterQues = null;
			   
			   $scope.formShow = false;
			   $scope.load();
		}
		
	    $scope.postAns = function(value){
			
			    
			    $scope.postData = JSON.parse(localStorage.getItem("aksData")) || [];
			    for(var i = 0; i < $scope.postData.length; i++)
			        {
					  if($scope.postData[i].questions == value.questions)
					    {
						   alert(JSON.stringify(value.questions));
						   
						   $scope.postData[i].answer = value.answer || [];
						   
			                 $scope.postData[i].answer.push(value.ansss);
			                 
			                alert("new"+JSON.stringify($scope.postData[i].answer));
			              
			                
			                alert("post"+JSON.stringify($scope.postData));
		
			               localStorage.setItem('aksData', JSON.stringify( $scope.postData));
					    }
					  
					  
				    }
			    
			   
			   // $scope.ansNew = {};
			    //$scope.ansNew.questions = value.questions;
			  //  $scope.postData.answer = value.answer || [];
			    //$scope.postData.answer.push(value.ansss);
			    //alert("new"+JSON.stringify($scope.postData.answer));
			    //$scope.postData.push($scope.ansNew);
			   // alert("post"+JSON.stringify($scope.postData));
		
			   // localStorage.setItem('aksData', JSON.stringify( $scope.postData));
			   $scope.load();
		}
})
.controller('SignInCtrl', [
        '$scope', '$rootScope', '$firebaseAuth', '$window',
        function($scope, $rootScope, $firebaseAuth, $window) {
			//alert("call");
            // check session
           // $rootScope.checkSession();

            $scope.user = {
                email: "",
                password: ""
            }; 
            $scope.validateUser = function() {
                $rootScope.show('Please wait.. Authenticating');
                var email = this.user.email;
                var password = this.user.password;
                if (!email || !password) {
                    $rootScope.notify("Please enter valid credentials");
                    return false;
                }
                 //alert("call");
                $rootScope.auth.$login('password', {
                    email: email,
                    password: password
                }).then(function(user) {
					localStorage.setItem('user', JSON.stringify(user));
                    $rootScope.hide();
                    $rootScope.userEmail = user.email;
                    //alert("login");
                    $window.location.href = ('#/app/home');
                }, function(error) {
					alert(JSON.stringify(error));
                    $rootScope.hide();
                    if (error.code == 'INVALID_EMAIL') {
                        $rootScope.notify('Invalid Email Address');
                    } else if (error.code == 'INVALID_PASSWORD') {
                        $rootScope.notify('Invalid Password');
                    } else if (error.code == 'INVALID_USER') {
                        $rootScope.notify('Invalid User');
                    } else {
                        $rootScope.notify('Oops something went wrong. Please try again later');
                    }
                });
            }
        }
    ])

.controller('SignUpCtrl', [
    '$scope', '$rootScope', '$firebaseAuth', '$window',
    function($scope, $rootScope, $firebaseAuth, $window) {

        $scope.user = {
            email: "",
            password: ""
        };
        $scope.createUser = function() {
            var email = this.user.email;
            var password = this.user.password;
            if (!email || !password) {
                $rootScope.notify("Please enter valid credentials");
                return false;
            }
            $rootScope.show('Please wait.. Registering');

            $rootScope.auth.$createUser(email, password, function(error, user) {
                if (!error) {
                    $rootScope.hide();
                    $rootScope.userEmail = user.email;
                    $window.location.href = ('#/bucket/list');
                } else {
                    $rootScope.hide();
                    if (error.code == 'INVALID_EMAIL') {
                        $rootScope.notify('Invalid Email Address');
                    } else if (error.code == 'EMAIL_TAKEN') {
                        $rootScope.notify('Email Address already taken');
                    } else {
                        $rootScope.notify('Oops something went wrong. Please try again later');
                    }
                }
            });
        }
    }
])

.controller('devicetCtrl', function($scope, $stateParams) {
        //alert("call");
        // device information code
       $scope.deviceInfo = ionic.Platform.device();
       //alert("device"+JSON.stringify( $scope.deviceInfo));

        // Vibrate 100ms
        
        
});
