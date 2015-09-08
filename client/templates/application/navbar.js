Template.navbar.events({
	"click .logout" : function(){
		Meteor.logout();
		Router.go('/');
	},
	
	"submit .login" : function(event){
			event.preventDefault();
			
			var email = event.target.email.value;
			var password = event.target.password.value;
			
			Meteor.loginWithPassword({email : email}, password);
			
			event.target.email.value = "";
			event.target.password.value="";
			
			Router.go('/');
			return false;
	},
	
	"click .become-teacher" : function(event){

		event.preventDefault();
		Router.go('/propose-lesson/step-1');
	},

});
