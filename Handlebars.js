
Peeps = Meteor.collection("people");

if (Meteor.isClient) {
  Template.list.people = function () {
	return Peeps.find({});
  };
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
