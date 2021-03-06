if (Meteor.isClient) {

  Session.set("halal", false);
  Session.set("vegetarian", false);

  Template.feed.helpers({
    restaurantSelector: function () {
      //Store the currentRestaurant as a session variable
      Session.set('currentRestaurant', this)
      return this.name;
    },
    //Find the corresponding food items from the current restaurant
    item: function() {
      halal = Session.get("halal");
      vegetarian = Session.get("vegetarian"); 
      price = Session.get("price"); 
      currentRestaurantID = Session.get('currentRestaurant')._id;
      // return Foods.find({"restaurantID": parseInt(currentRestaurantID,10)}, {sort: {rating: -1 }})
      // return Meteor.call('display_food', halal, vegetarian, currentRestaurantID)
      // return Foods.find({"restaurantID": parseInt(currentRestaurantID,10)}, {sort: {rating: -1 }})
      
      if (price == true) {
        if (halal & vegetarian) {
            console.log("only vegitarian and only halal")
            //display only halal and vegetarian food
            return Foods.find({"restaurantID": parseInt(currentRestaurantID,10), "vegetarian": true, "halal": true}, {sort: {price: -1}})
        } else if (halal) {
            console.log("only halal")
            //display only halal food 
            return Foods.find({"restaurantID": parseInt(currentRestaurantID,10), "halal": true}, {sort: {price: -1}})
        } else if (vegetarian) {
            console.log("only vegitarian")
            //display only vegetarian food 
            return Foods.find({"restaurantID": parseInt(currentRestaurantID,10), "vegetarian": true}, {sort: {price: -1}})
        } else {
          console.log("displaying all")
          //display all
          // console.log(Foods.find({"restaurantID": parseInt(currentRestaurantID,10)}, {sort: {rating: -1 }}))
          return Foods.find({"restaurantID": parseInt(currentRestaurantID,10)}, {sort: {price: -1}})
        };
      } else {
        if (halal & vegetarian) {
            console.log("only vegitarian and only halal")
            //display only halal and vegetarian food
            return Foods.find({"restaurantID": parseInt(currentRestaurantID,10), "vegetarian": true, "halal": true}, {sort: {rating: -1}})
        } else if (halal) {
            console.log("only halal")
            //display only halal food 
            return Foods.find({"restaurantID": parseInt(currentRestaurantID,10), "halal": true}, {sort: {rating: -1}})
        } else if (vegetarian) {
            console.log("only vegitarian")
            //display only vegetarian food 
            return Foods.find({"restaurantID": parseInt(currentRestaurantID,10), "vegetarian": true}, {sort: {rating: -1}})
        } else {
          console.log("displaying all")
          //display all
          // console.log(Foods.find({"restaurantID": parseInt(currentRestaurantID,10)}, {sort: {rating: -1 }}))
          return Foods.find({"restaurantID": parseInt(currentRestaurantID,10)}, {sort: {rating: -1}})
      };

      }
    },
    addItem: function() {
      //this is the restaurant right now
      console.log(this)
      //we want to return /restaurantName/addmenu
      return this.name +"/addItem"
    }
  });

  Template.feed.events({

    'click .voteUp': function (event) {
      //Hack for changing arrow colors
      current_div = event.currentTarget 
      if ($(current_div).hasClass("clicked")){
        return;
      } else {
        $(current_div).addClass("clicked")

      $(current_div).siblings().removeClass("downVote clicked")
        Meteor.call("upVote", this);
      }
    },

    'click .voteDown': function (event) {

      current_div = event.currentTarget 
      if ($(current_div).hasClass("clicked")){
        return;
      } else {
        $(current_div).addClass("clicked")    

        $(current_div).siblings().removeClass("upVote clicked")

        Meteor.call("downVote", this);
      }
      
    },
    'click #vegetarian': function () {

      if (Session.get("vegetarian")) {
        Session.set("vegetarian", false);
      } else {
        Session.set("vegetarian", true);
      };


      var div_tag = document.getElementById("vegetarian");
      var current_class = div_tag.className;

      if (current_class == "filterOn") {
        div_tag.className = "filterOff"; 
      } else {
        div_tag.className = "filterOn"; 
      }

      halal_div_class = document.getElementById("halal").className;
      vegetarian_div_class = document.getElementById("vegetarian").className;

      currentRestaurantID = Session.get('currentRestaurant')._id;

      // Meteor.call("display_food");
    },
    'click  #halal': function () {
      if (Session.get("halal")) {
        Session.set("halal", false);
      } else {
        Session.set("halal", true);
      };
      
      div_tag = document.getElementById("halal");

      var current_class = div_tag.className;

      if (current_class == "filterOn") {
        div_tag.className = "filterOff"; 
      } else {
        div_tag.className = "filterOn";
      };

      halal_div_class = document.getElementById("halal").className;
      vegetarian_div_class = document.getElementById("vegetarian").className;

      currentRestaurantID = Session.get('currentRestaurant')._id;

      Meteor.call("display_food");
    },
    'click #price': function () {
      if (Session.get("price")) {
        Session.set("price", false);
      } else {
        Session.set("price", true);
      };

      div_tag = document.getElementById("price");

      var current_class = div_tag.className;

      if (current_class == "filterOn") {
        div_tag.className = "filterOff"; 
      } else {
        div_tag.className = "filterOn";
      };
    },
    'click .menuToggler': function() {
      if ($("#dropDownGlyph").hasClass("up")) {
        $("#dropDownGlyph").css("transform", "rotate(180deg)");
        $('#dropDownMenu').css("top", "65px");
        $("#dropDownGlyph").removeClass("up");
      } else {
        $("#dropDownGlyph").css("transform", "rotate(-0deg)");
        $("#dropDownGlyph").addClass("up");
        height = "-" + $("#dropDownMenu").css("height");
        $('#dropDownMenu').css({"top": height, "display": "block"});
      }
    }
  });

  Template.food.helpers({
    detailedItem: function() {
      restaurantName = Session.get("currentRestaurant").name
      //this is the name of the food
      return "/" + restaurantName + "/food/" + this.name 
    },
    voteUpChecker: function() {
    },
    voteDownChecker: function() {
    }
  });
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
  display_food: function(halal, vegetarian, currentRestaurantID) {
  }
})