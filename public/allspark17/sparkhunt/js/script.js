
function onSignIn(googleUser) {
    // Useful data for your client-side scripts:
    var profile = googleUser.getBasicProfile();
    var user = {};
    user.id = profile.getId();
    user.name = profile.getName();
    user.picUrl = profile.getImageUrl();
    user.email = profile.getEmail();
    // The ID token you need to pass to your backend:
    var id_token = googleUser.getAuthResponse().id_token;
    angular.element(document.getElementById('shController')).scope().loggedIn(user);
  };

var sparkHuntModule = angular.module('sparkHuntModule',[])

.controller('sparkHuntController', function($scope, $http){
    $scope.lState = false;
    $scope.showLoader = false;

    $scope.user = {
        name : 'Guest'
    };

    $scope.players = [];
    $scope.game = {
        playingStatus : true,
        maintenanceStatus: false,
        answer: '',
        showRules: false
    };

    $scope.loggedIn = function(user){
        $scope.user = user;
        $scope.showLoader = true;
        $http({
			method: 'POST', 
            url: URLS.SERVER + URLS.API.LOGIN_USER,
            data: $scope.user,
			headers: {'Content-Type': 'application/json'},
		}).
	    success(function(result, status, headers, config) {
            $scope.lState = true;
            $scope.processResult(result);
	    }).
	    error(function(data, status, headers, config) {
            console.log("Error"+data);
            $scope.showLoader = false;
	    });
    };


    $scope.checkAnswer = function(){
        if($scope.game.answer.length > 0){
            $scope.showLoader = true;
            $http({
                method: 'POST', 
                url: URLS.SERVER + URLS.API.CHECK_ANSWER,
                data: {
                    user: {
                        "id" : $scope.user.id
                    },
                    game: {
                        "answer": $scope.game.answer.toLowerCase().trim()
                    }
                    
                },
                headers: {'Content-Type': 'application/json'},
            }).
            success(function(result, status, headers, config) {
                console.log("Success");
                $scope.processResult(result);
            }).
            error(function(data, status, headers, config) {
                console.log("Error"+data);
                $scope.showLoader = false;
            });
        }else{
            $scope.showMessage("No answer given.", "error");
        }
    };

    $scope.processResult = function(result){
        $scope.user.level = result.user.level;
        if($scope.user.level > 25){
            $scope.user.level = "OVER"
        }
        if(result.game.playingStatus == true && result.game.maintenanceStatus == false){
            $scope.user.isGameCompleted = result.user.isGameCompleted;
            

            if($scope.user.isNewUser){
                $scope.showRules();
            }

            if($scope.user.isGameCompleted == false){
                
                $scope.question = result.question;
                $scope.getLeaderBoard();
                $scope.getClues();
                $scope.game.answer = "";
                if(result.user.isNextLevel == false){
                    $scope.showMessage("Sorry! Wrong Answer", "error");
                }else{
                    $scope.showMessage("Wow! Correct Answer", "success");
                }
            }else{
                $scope.user.level = "Over";
                $scope.getLeaderBoard();
            }
        }else{
            $scope.game = {
                playingStatus : result.game.playingStatus,
                maintenanceStatus: result.game.maintenanceStatus,
                answer: '',
                showRules: false
            };
            
        }
        $scope.showLoader = false;
    };

    $scope.showMessage = function(msg, kind){
        $("#snackbar").addClass("show").addClass(kind);
        $("#snackbar").html(msg);
        setTimeout(function(){ $("#snackbar").removeClass("show").removeClass(kind); }, 2000);
    }

    $scope.getClues = function(){
        $http({
			method: 'GET', 
            url: URLS.SERVER + URLS.API.GET_CLUES
		}).
	    success(function(result, status, headers, config) {
            $scope.clues = result[$scope.user.level];
	    }).
	    error(function(data, status, headers, config) {
	    	console.log("Error"+data);
	    });
    }

    $scope.getLeaderBoard = function(){
        $http({
			method: 'GET', 
            url: URLS.SERVER + URLS.API.GET_LEADER_BOARD
		}).
	    success(function(result, status, headers, config) {
            $scope.players = result;
            for(var i = 0 ; i < $scope.players.length ; i++){
                if($scope.players[i].level > 25){
                    $scope.players[i].level = 25;
                }
            }
            for(var i = 0 ; i < $scope.players.length ; i++){
                if($scope.players[i].email == $scope.user.email){
                    $scope.user.rank = $scope.players[i].rank;
                    break;
                }
            }
	    }).
	    error(function(data, status, headers, config) {
	    	console.log("Error"+data);
	    });
    };

    $scope.showRules = function(){
        $scope.game.showRules = true;
    }

    $scope.showGame = function(){
        $scope.game.showRules = false;
    }

    $scope.init = function(){
        $scope.getLeaderBoard();
    }

    $scope.signOut = function() {
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
            $scope.lState = false;
            location.reload();
        });
    }

    $scope.init();

});