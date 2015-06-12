if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.details.helpers({
    restaurantSelector: function () {
      ourRestaurant = Restaurants.findOne();
      //Store the currentRestaurant as a session variable
      Session.set('currentRestaurant', ourRestaurant)
      return ourRestaurant.name;
    },
    //Find the corresponding food items from the current restaurant
    item: function() {
      currentRestaurantID = Session.get('currentRestaurant')._id;
      // console.log(Foods.find({}).count())
      // console.log(parseInt(currentRestaurantID,10))
      // console.log(Foods.find({"restaurantID": parseInt(currentRestaurantID,10)}).count())
      return Foods.find({"restaurantID": parseInt(currentRestaurantID,10)})
    },
    test:function() {
      return this.name
    }
  });

  Template.details.events({
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
}

//Need to add functionality where you can only upvote once
Meteor.methods({
})