
Peeps = Meteor.collection("people");

if (Meteor.isClient) {
  Template.list.people = function () {
	return Peeps.find({});
  };

  Template.hello.events({
    'click input': function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
		if (Peeps.find().count() == 0){
			var names = ["Ada Lovelace",
						"Grace Hopper",
					    "Marie Curie",
					    "Carl Friedrich Gauss",
					    "Nikola Tesla",
					    "Claude Shannon"];
		}
		for (var i = 0; i < names.length; i++){
			Peeps.insert({name: names[i]});
		}
  });
}
