Served
====
for Decode Dubai Hackathon 2015
Developed by Quan Vuong, Brooke Hopkins, Vasily Rudchenko, and Koh Terai, all students of [New York University Abu Dhabi](http://nyuad.nyu.edu).

The code is developed on [Meteor](http://meteor.com) with [Bootstrap](http://getbootstrap.com) for styling. The project is still a prototype and has only been primarily developed during the 48 hours of the Hackathon.

The app can be accessed by running ```meteor``` in the root directory of the project folder. In addition fixtures have been included to supply test data for demo uses. They can be loaded into the mongo database by running the Javascript command ```Meteor.call("fixtures")``` in the browser.

<h2>File Organization</h2>
Each `Template` is divided into separate .js and .html files with its corresponding filename. Routing is implemented with the [iron-router](https://github.com/iron-meteor/iron-router/) plugin. Routing functions are located in the folder `/utilities/router.jp`.


<h2>Missing Functionality</h2>
Currently a user management system is not implemented. This means that the upvotes, and downvotes are not tracked specific to user thus only based on the current session. In addition, login systems are not implemented so commenting functions are not run.

Database access is not secure. Certain updates and inserts are implemented directly from the client side.

Location services are disabled for the time being. The feed automatically starts on the `/Gazebo` which is one of the demo restaurants included in the fixtures.