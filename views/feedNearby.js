if (Meteor.isClient) {
  Template.feedNearby.helpers({
  	restaurantList: function () {

  			var current_restaurant = this.name;

  			return Restaurants.find( {name : {$ne: current_restaurant}});

		},
		location: function() {
			Session.set("loc", Geolocation.latLng());
		},
		distance: function() {
			myLocation = Session.get("loc"); 
			// console.log(myLocation)
			return myDistance(myLocation.lat, myLocation.lng, this.latitude, this.longtitude, "K")
		},

	});

  Template.feedNearby.events({
  });
}

myDistance = function(lat1, lon1, lat2, lon2, unit) {
			var radlat1 = Math.PI * lat1/180
			var radlat2 = Math.PI * lat2/180
			var radlon1 = Math.PI * lon1/180
			var radlon2 = Math.PI * lon2/180
			var theta = lon1-lon2
			var radtheta = Math.PI * theta/180
			var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
			dist = Math.acos(dist)
			dist = dist * 180/Math.PI
			dist = dist * 60 * 1.1515
			if (unit=="K") { dist = dist * 1.609344 }
			if (unit=="N") { dist = dist * 0.8684 }
			// convert units to meters and get rid of decimals
			return Math.round(dist*1000)
}

// $(document).ready(function() {
// 	console.log($("#dropDownMenu").height
// })