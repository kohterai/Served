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
  this.render('addItem', {
    data: function () {
      //console.log(Restaurants.findOne({name: this.params._id}))
      return Restaurants.findOne({name: this.params._id});
    }
  });
});




Router.route('/feed/restaurant/detail', function () {
	this.next()
  this.render('details');
	}, {
		name: 'post.show'
});
