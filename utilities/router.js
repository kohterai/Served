Router.route('/', function () {
  this.render('Menu');
});

Router.route('/login', function () {
  this.render('Login');
});

Router.route('/addItem', function () {
  this.render('addItem');
});


Router.route('/feed/:_id', function () {
  this.render('feed', {
    data: function () {
    	// console.log(Restaurants.findOne({name: this.params._id}))
      return Restaurants.findOne({name: this.params._id});
    }
  });
});

// Router.route('/feed/:_id/:foodName', function () {
//   this.render('details', {
//   	name: 'item.name'
//   });
// });