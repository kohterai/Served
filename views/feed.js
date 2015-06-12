if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.feed.helpers({
    restaurantSelector: function () {
      //Store the currentRestaurant as a session variable
      Session.set('currentRestaurant', this)
      return this.name;
    },
    //Find the corresponding food items from the current restaurant
    item: function() {
      currentRestaurantID = Session.get('currentRestaurant')._id;
      // console.log(Foods.find({}).count())
      // console.log(parseInt(currentRestaurantID,10))
      // console.log(Foods.find({"restaurantID": parseInt(currentRestaurantID,10)}).count())
      return Foods.find({"restaurantID": parseInt(currentRestaurantID,10)}, {sort: {rating: -1 }})
    },
    addItem: function() {
      //this is the restaurant right now
      console.log(this)
      //we want to return /restaurantName/addmenu
      return this.name +"/addItem"
    }
  });

  Template.feed.events({
    'click .voteUp': function () {
      Meteor.call("upVote", this);
    },
    'click .voteDown': function () {
      Meteor.call("downVote", this);
    },
    'click #vegetarian': function () {
      Meteor.call("change_class_vegetarian", this);
      Meteor.call("display_food", this);
    },
    'click  #halal': function () {
      Meteor.call("change_class_halal", this);
      Meteor.call("display_food", this);
    },
  });

  Template.food.helpers({
    detailedItem: function() {
      restaurantName = Session.get("currentRestaurant").name
      //this is the name of the food
      return "/" + restaurantName + "/food/" + this.name 
    }
  })
}

//Need to add functionality where you can only upvote once
Meteor.methods({
  upVote: function(food) {
    currentVote = food.rating;
    Foods.update({_id:food._id}, {$set: {"rating": currentVote+1}})
  },
  downVote: function(food) {
    currentVote = food.rating;
    Foods.update({_id:food._id}, {$set: {"rating": currentVote-1}})
  },

  change_class_vegetarian: function() {

    div_tag = document.getElementById("vegetarian");

    var current_class = div_tag.className;

    if (current_class == true) {
      div_tag.className = false; 
    } else {
      div_tag.className = true;
    }

  },

  change_class_halal: function() {

    div_tag = document.getElementById("halal");

    var current_class = div_tag.className;

    if (current_class == true) {
      div_tag.className = false; 
    } else {
      div_tag.className = true;
    }
  },

 display_food: function() {
    currentRestaurantID = Session.get('currentRestaurant')._id;

    halal_div_class = document.getElementById("halal").className
    vegetarian_div_class = document.getElementById("vegetarian").className

    if ((halal_div_class == false) & (vegetarian_div_class == false)) {
      //display all food 
      return Foods.find({"restaurantID": parseInt(currentRestaurantID,10)}, {sort: {rating: -1 }})
    };

    if ((halal_div_class == true) & (vegetarian_div_class == false)) {
      //display only halal food 
      return Foods.find({"restaurantID": parseInt(currentRestaurantID,10)}, {"halal": true}, {sort: {rating: -1 }})
    };

    if ((halal_div_class == false) & (vegetarian_div_class == true)) {
      //display only vegetarian food 
      return Foods.find({"restaurantID": parseInt(currentRestaurantID,10)}, {"vegetarian" : true}, {sort: {rating: -1 }})
    };

    if ((halal_div_class == true) & (vegetarian_div_class == true)) {
      //display both halal and vegetarian food 
      return Foods.find({"restaurantID": parseInt(currentRestaurantID,10)}, {"vegetarian" : true}, {"halal": true}, {sort: {rating: -1 }})
    };
  },


})