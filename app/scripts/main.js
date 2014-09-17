App = Ember.Application.create({

});

App.Router.map(function(){
	this.route('first-route', {path: 'first-route'});
});

// By default ember will show your index route when at application route
App.IndexRoute = Ember.Route.extend({
	model: function(){
		return ['red', 'yellow', 'blue'];
	}
});

App.FirstRouteRoute = Ember.Route.extend({
	actions: {
		headerClicked: function(){
			console.log('header clicked')
		}
	}
});
