
Template.home.events({
	"click .go-form" : function(event){

		event.preventDefault();
		Router.go('/become-teacher/step-1');
	},
	
	"click .logout" : function(){
			Meteor.logout();
			Router.go('/');
	}

});

Template.home.helpers({
	lessons : function(){
	
			return Lessons.find();
			}
});

Template.home.onCreated(function(){
	Meteor.subscribe('allLessons');

});
