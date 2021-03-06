//Restaurants collection will store the name and details of the restaurants
//Foods collection will store data for individual foods
Restaurants = new Mongo.Collection("restaurants");
Foods = new Mongo.Collection("food");
Comments = new Mongo.Collection("comments");
Votes = new Mongo.Collection("votes");

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);
  Template.home.helpers({
    restaurantList: function () {
    	console.log(Restaurants.find({}))
			return Restaurants.find({});
	  }
	});

  Template.home.events({
    "click #homeScreen": function () {
      window.location.href = '/Gazebo';
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}