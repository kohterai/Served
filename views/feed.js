if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.feed.helpers({
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
    }
  });

  Template.feed.events({
    'click .voteUp': function () {
      Meteor.call("upVote", this);
      console.log("we are here upvote");
    }
  });
}


Meteor.methods({
  upVote: function(food) {
    currentVote = food.rating;
    console.log(food._id)
  }
})