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
  $ionicModal.fromTemplateUrl('templates/auth-signin.html', {
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

.controller('chatController', ['$rootScope','$scope','Message', '$localStorage', 'usersOnline', '$ionicModal', function( $rootScope, $scope, Message, $localStorage, usersOnline, $ionicModal){
           

          //$rootScope.show('Please wait.. Authenticating');

           $scope.profile =JSON.parse(localStorage.getItem("userProfile"));
           //alert($scope.profile.name);
      			$scope.user="Guest";
      			$scope.messages= Message.all;
            console.log($scope.messages);

            //$rootScope.hide();
            
             //usersOnline  = $scope.messages.length;  // tatol online users

      			$scope.inserisci = function(message){
      				message.user = $scope.profile.name;
      				//alert(JSON.stringify(message));
      				Message.create(message);
      				$scope.newmessage = null;
      			};
      			
      			
      			$scope.deleteMessage = function(message){
      				
      				Message.delete(message);
      				
      			}
	}])
.controller('listCtrl', function($scope) {
	
	$scope.data = {
    showDelete: false
  };
  
  $scope.edit = function(item) {
    alert('Edit Item: ' + item.id);
  };
  $scope.share = function(item) {
    alert('Share Item: ' + item.id);
  };
  
  $scope.moveItem = function(item, fromIndex, toIndex) {
    $scope.items.splice(fromIndex, 1);
    $scope.items.splice(toIndex, 0, item);
  };
  
  $scope.onItemDelete = function(item) {
    $scope.items.splice($scope.items.indexOf(item), 1);
  };
  
  $scope.items = [
    { id: 0 },
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
    { id: 11 },
    { id: 12 },
    { id: 13 },
    { id: 14 },
    { id: 15 },
    { id: 16 },
    { id: 17 },
    { id: 18 },
    { id: 19 },
    { id: 20 },
    { id: 21 },
    { id: 22 },
    { id: 23 },
    { id: 24 },
    { id: 25 },
    { id: 26 },
    { id: 27 },
    { id: 28 },
    { id: 29 },
    { id: 30 },
    { id: 31 },
    { id: 32 },
    { id: 33 },
    { id: 34 },
    { id: 35 },
    { id: 36 },
    { id: 37 },
    { id: 38 },
    { id: 39 },
    { id: 40 },
    { id: 41 },
    { id: 42 },
    { id: 43 },
    { id: 44 },
    { id: 45 },
    { id: 46 },
    { id: 47 },
    { id: 48 },
    { id: 49 },
    { id: 50 }
  ];
  
})
.controller('homeCtrl', function($scope, aksQuestion,  $ionicActionSheet, $rootScope) {






                     $scope.profile =JSON.parse(localStorage.getItem("userProfile"));
                       //alert($scope.profile.name);
                        $scope.user="Guest";
                        $scope.messages= aksQuestion.all;
                        console.log($scope.messages);
                        
                         usersOnline  = $scope.messages.length;  // tatol online users

                        $scope.inserisci = function(message){
                          alert("");
                          message.username = "gopal";
                          var answers = {ans:"yse", user:"no"};
                          message.answers;
                          //alert(JSON.stringify(message));
                          aksQuestion.create(message);
                          $scope.newmessage = null;
                        };
                        
                        
                        $scope.deleteMessage = function(message){
                          
                          aksQuestion.delete(message);
                          
                        }











   
    
       $scope.load = function(){
			  $scope.aksQus = JSON.parse(localStorage.getItem("aksData")) || [];
			 
		}
      
    
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
			   //$scope.enterQues = null;
			   
			   $scope.formShow = false;
			   $scope.load();
		}
		
	    $scope.postAns = function(value){
			
			    
			    $scope.postData = JSON.parse(localStorage.getItem("aksData")) || [];
			    for(var i = 0; i < $scope.postData.length; i++)
			        {
					  if($scope.postData[i].questions == value.questions)
					    {
						   //alert(JSON.stringify(value.questions));
						   
						   $scope.postData[i].answer = value.answer || [];
						   
			                 $scope.postData[i].answer.push(value.ansss);
			                 
			                //alert("new"+JSON.stringify($scope.postData[i].answer));
			              
			                
			               // alert("post"+JSON.stringify($scope.postData));
		
			               localStorage.setItem('aksData', JSON.stringify( $scope.postData));
					    }
					  
					  
				    }
			   
			   $scope.load();
		} 
		
		
		
		
		$scope.show = function() {

		   // Show the action sheet
		   var hideSheet = $ionicActionSheet.show({
			 buttons: [
			   { text: '<b>Share</b> This' },
			   { text: 'Move' }
			 ],
			 destructiveText: 'Delete',
			 titleText: 'Modify your album',
			 cancelText: 'Cancel',
			 cancel: function() {
				  // add cancel code..
				},
			 buttonClicked: function(index) {
			   return true;
			 }
		   });

		   // For example's sake, hide the sheet after two seconds
		   

		 };
 })
.controller('SignInCtrl', [
        '$scope', '$rootScope', '$firebaseAuth', '$window',
        function($scope, $rootScope, $firebaseAuth, $window, $localStorage) {
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
                    
                          $rootScope.newUser.child("users").child(user.uid).once('value', function (snapshot) {
							var val = snapshot.val();
							// To Update AngularJS $scope either use $apply or $timeout
							$scope.$apply(function () {
								localStorage.setItem("userProfile", JSON.stringify(val))
								//$rootScope.profile = val;
								//$rootScope.userName = val.name;
								//$rootScope.userMobile = val.mobile;
								//$rootScope.userEmail = val.email;
								//alert(JSON.stringify(val));
							});
						});
                        
                      
                    
                    
                    
                    //alert("login");
                    $window.location.href = ('#/app/home');
                }, function(error) {
					//alert(JSON.stringify(error));
                    $rootScope.hide();
                    if (error.code == 'INVALID_EMAIL') {
                        alert('Invalid Email Address');
                    } else if (error.code == 'INVALID_PASSWORD') {
                        alert('Invalid Password');
                    } else if (error.code == 'INVALID_USER') {
                       alert('Invalid User');
                    } else {
                        alert('Oops something went wrong. Please try again later');
                    }
                });
            }
        }
    ])

.controller('SignUpCtrl', [
    '$scope', '$rootScope', '$firebaseAuth', '$window',
    function($scope, $rootScope, $firebaseAuth, $window , Users) {

        $scope.user = {
            name: "",
            mobile: "",
            email: "",
             image: "",
            password: ""
           
        };
        $scope.createUser = function() {
            var name = this.user.name;
            var mobile = this.user.mobile;
            var email = this.user.email;
            var image = this.user.image;

            var password = this.user.password;
            if (!email || !password) {
                $rootScope.notify("Please enter valid credentials");
                return false;
            }
            $rootScope.show('Please wait.. Registering');
            console.log(image);
            console.log(this.user.image);

            $rootScope.auth.$createUser(email, password, function(error, user) {
                if (!error) {
                    $rootScope.hide();
                    $rootScope.userEmail = user.email;
                    
                    $rootScope.newUser.child("users").child(user.uid).set({
          						name: name,
          						mobile: mobile,
          						email: email,
                      image: image
          					});
                    
                    
                    
                    alert("Registration success. Please login");
                    $window.location.href = ('#/auth/signin');
                    
                } else {
                    $rootScope.hide();
                    if (error.code == 'INVALID_EMAIL') {
                        alert('Invalid Email Address');
                    } else if (error.code == 'EMAIL_TAKEN') {
                        alert('Email Address already taken');
                    } else {
                        alert('Oops something went wrong. Please try again later');
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
       alert("device"+JSON.stringify( $scope.deviceInfo));

        // Vibrate 100ms
        
        
        var latLong = new google.maps.LatLng(21.188083, 72.840092);
				var mapOptions = {
					center: latLong,
					zoom: 13,
					mapTypeId: google.maps.MapTypeId.ROADMAP
				};
				var map = new google.maps.Map(document.getElementById("map"), mapOptions);
				//alert(map);
				
				var marker = new google.maps.Marker({
					  position: latLong,
					  map: map,
					  title: 'my location'
				});
        
        $scope.getCurrentLocation = function(varname)
		{
		   $scope.mapView = true;
			var map = navigator.geolocation.getCurrentPosition($scope.onSuccess, $scope.onError, { maximumAge: 3000, timeout: 5000 ,enableHighAccuracy:true});
		   //$scope.map = true;
		}
	   $scope.onSuccess = function(position){
			$scope.selectBuyer = true;
			$scope.longitude = position.coords.longitude;
			$scope.latitude = position.coords.latitude;
			 localStorage.setItem('latitude', $scope.latitude);
			 localStorage.setItem('longitude', $scope.longitude);
			console.log($scope.latitude);
			var latLong = new google.maps.LatLng($scope.latitude, $scope.longitude);
				var mapOptions = {
					center: latLong,
					zoom: 13,
					mapTypeId: google.maps.MapTypeId.ROADMAP
				};
				var map = new google.maps.Map(document.getElementById("map"), mapOptions);
				//alert(map);
				
				var marker = new google.maps.Marker({
					  position: latLong,
					  map: map,
					  title: 'my location'
				});
		}
		
				
		
	   $scope.onError = function(error){
        
        
	    }
        
        
        
        
        
        
        
})
.controller('userProfileCtrl', function($scope, $stateParams, $rootScope, $localStorage) {
	
	
	
	
	$scope.profile =JSON.parse(localStorage.getItem("userProfile"));
       
});

function escapeEmailAddress(email) {
    if (!email) return false
    // Replace '.' (not allowed in a Firebase key) with ','
    email = email.toLowerCase();
    email = email.replace(/\./g, ',');
    return email.trim();
}
