if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.Feed.helpers({
  });

  Template.Feed.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}



// Meteor.methods({
//   insertMenuItem: function() {
//     Foods.insertMenuItem()
//   }
// })