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
    },
    test:function() {
      console.log(Session.get("currentRestaurant"))
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
    "submit .new-food": function(even, template) {
    event.preventDefault();

    "Need to add auto-complete here"
    "Add the new food into the food_list"
    "Need to split filter into different word and put into list"

    food_list.insert({
        food_name: template.find(".name").value,
        description: template.find(".description").value,
        price: template.find(".price").value,
        category: template.find(".category").value,
        filter: template.find(".filter").value,
    });
    }
});

}

//Need to add functionality where you can only upvote once
Meteor.methods({
})

