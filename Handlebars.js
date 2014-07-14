
People = new Meteor.Collection("people"); 

if (Meteor.isClient) {
  Template.list.people = function () {
	return People.find({});
  };
}

if (Meteor.isServer) {
  Meteor.startup(function () {
		People.remove({});
		var names = ["Ada Lovelace",
					"Grace Hopper",
					"Marie Curie",
					"Carl Friedrich Gauss",
					"Nikola Tesla",
					"Claude Shannon"];
		for (var i = 0; i < names.length; i++){
			People.insert({name: names[i]});
		};
		
  });
}
