'use strict';

angular.module('homeworkApp')
  .controller('MainCtrl', function ($scope, $http) {

  	$scope.initVariables = function(){
	  	$scope.address="";
	  	$scope.markers=[];
	  	$scope.mapResults = [];
	  	$scope.map = {
			center: {
				latitude: 51,
				longitude: 10.4
			},
			zoom: 7
		};
	    $scope.geocoder = new google.maps.Geocoder();
  	}

  	$scope.getDataFromAddress = function(address){

		$scope.geocoder.geocode( { 'address': $scope.address.replace(/ /g, "+")}, function(results, status) {
	      
	      if (status == google.maps.GeocoderStatus.OK) {
	        $scope.mapResults = results;
	      } else {
	        $scope.status = "Geocode was not successful: " + status;
	      }
	      $scope.$apply();
	    });

  	}
  	$scope.setDataIntoMap = function(i){

  		$scope.targetCoordinates= {
  			latitude: $scope.mapResults[i].geometry.location.d,
  			longitude: $scope.mapResults[i].geometry.location.e
  		};

  		$scope.markers.push($scope.targetCoordinates);
  		
  		$scope.resetResults();

  	}

  	$scope.resetResults = function(){
  		$scope.mapResults = null;
  		$scope.address='';
  	}
  	
  	
  	$scope.initVariables();
  
  });
