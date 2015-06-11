Router.route('/', function () {
  this.render('Menu');
});

Router.route('/login', function () {
  this.render('Login');
});

Router.route('/feed', function () {
  this.render('feed');
});

Router.route('/addItem', function () {
  this.render('addItem');
});