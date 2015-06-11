fixtureItems = [{
      restaurantName: "Kohs Awesome Restaurant",
      latitude: "10.203",
      longtitude: "20.3422",
      menu: {
      	rating: 0,
      	price: 100,
      	catagory: ["vegan", "puppies"]
      }
    },
    {
      restaurantName: "Kohs Awesome Restaurant 2",
      latitude: "10.203",
      longtitude: "20.3422",
      menu: {
      	rating: 0,
      	price: 100,
      	catagory: ["vegan", "puppies"]
      }
    }
    ]

Meteor.methods({
	'fixtures': function() {
		Data.remove({})
		console.log("database dropped")
		for (i = 0; i < fixtureItems.length; i++) {
			Data.insert(fixtureItems[i]);
		}
    console.log("fixtures inserted")
	}
});


