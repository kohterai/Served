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
      return Foods.find({"restaurantID": parseInt(currentRestaurantID,10)})
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
    'click .filter': function() {
      console.log("We are right here right now")
    }
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
  }
})