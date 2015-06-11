restaurants = [{
		_id: 1,
		name: "Kohs Awesome restuarant",
		latitude: 10.239823,
		longtitude: 20.33322
	},
	{
		_id: 2,
		name: "Quans Aweoms.",
		latitude: 121.1212,
		longtitude: 211121
	}
]


menuItems = [{
      restaurantID: 1,
      name: "Chicken Curry",
			rating: 0,
			price: 100,
			catagory: "main dish",
			filter: ["vegan", "puppies"],
			reviews: [{
				user: "Koh",
				date: new Date(),
				comment: "This place is the best"
			}],
			date: new Date()
    }
    ]

Meteor.methods({
	'fixtures': function() {
		Data.remove({})
		console.log("database dropped")
		for (i = 0; i < menuItems.length; i++) {
			Data.insert(menuItems[i]);
		}
    console.log("fixtures inserted")
	}
});


