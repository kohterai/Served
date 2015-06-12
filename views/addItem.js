if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.addItem.helpers({
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

  Template.addItem.events({
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

Template.addItem.events({
    "submit .new-food": function(event, form) {
    event.preventDefault();

    "Add the new food into the food_list"

    "Need to add auto-complete here"
    "Need to split filter into different word and put into list"

    currentRestaurantID = Session.get('currentRestaurant')._id;

    Foods.insert({
        // restaurantID: Session.get('currentRestaurant')._id,
        restaurantID: parseInt(currentRestaurantID,10),
        name: event.target.name.value,
        description: event.target.description.value,
        price: event.target.price.value,
        category: event.target.category.value,
        filter: event.target.filter.value,
    });
  
    event.target.name.value = " ";
    event.target.description.value = " ";
    event.target.price.value = " ";
    event.target.filter.value = " ";

    return false;

    }
});

}

//Need to add functionality where you can only upvote once
Meteor.methods({
})

