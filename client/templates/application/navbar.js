Template.navbar.events({
	"click .logout" : function(){
		Meteor.logout();
		Router.go('/');
	},
	
	"submit .login" : function(event){
			event.preventDefault();
			
			Meteor.loginWithPassword({email : event.target.email.value}, event.target.password.value);
			return false;
	},
	
	"click .become-teacher" : function(event){

		event.preventDefault();
		Router.go('/propose-lesson/step-1');
	},

});
