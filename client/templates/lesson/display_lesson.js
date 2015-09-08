
Template.displayLesson.helpers({
		email : function(){
		
		}
});

Template.displayLesson.events({

		"click button" : function(){
				event.preventDefault();
				
				var lessonId = this._id;
				Session.set("lessonId", lessonId);
				
				if(Meteor.user()){
					Router.go("/subscribe/", lessonId);
				}
				else{
					Router.go("/subscribe/registration/", lessonId);
				}
		}
});
