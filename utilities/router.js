Router.route('/', function () {
  this.render('home');
});

Router.route('/login', function () {
  this.render('Login');
});

// Router.route('/addItem', function () {
//   this.render('addItem');
// });

Router.route('/:_id', function () {
  this.render('feed', {
    data: function () {
    	//console.log(Restaurants.findOne({name: this.params._id}))
      return Restaurants.findOne({name: this.params._id});
    }
  });
});

Router.route('/:_id/addItem', function () {
  var names = this.params;
  ourRestaurant = Restaurants.findOne({"name": names._id})
  Session.set('currentRestaurant', ourRestaurant)
  this.render('addItem', {
    data: function () {
      //console.log(Restaurants.findOne({name: this.params._id}))
      return Restaurants.findOne({name: this.params._id});
    }
  });
});


Router.route('/:_id/food/:foodName', function () {
  //_id assigned to restaurant name
  //foodName assigned as food name
  var names = this.params;
	// this.next()
  //find the restaurant first
  ourRestaurant = Restaurants.findOne({"name": names._id})
  restID = parseInt(ourRestaurant._id, 10)
  //now find the menu item inside
  currentFood = Foods.findOne({restaurantID: restID, name: names.foodName})
  
  Session.set('currentRestaurant', ourRestaurant)
  Session.set('currentFood', currentFood)

  this.render('details');
	}, {
    data: function () {
      //console.log(Restaurants.findOne({name: this.params._id}))
      console.log(currentFood)
      console.log("hereere")
      return currentFood
    }
  }
);
