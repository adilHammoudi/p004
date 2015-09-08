Template.reservation.onCreated(function(){
	if(Meteor.user()){
	
//		var lessonId = this.params.lessonId;
		var lessonId=Session.get("lessonId");
		var userId = Meteor.userId();
		var isPaid = false;
		
		var data = {
				lessonId : lessonId,
				userId : userId,
				isPaid : isPaid
		};
		
		Meteor.call("createReservation",data);
	}
	else{
	
	}
});

Template.reservation.helpers({
		
});

Template.reservation.events({
	"click .back-home" : function(event){
			event.preventDefault();
			
			Router.go('/');
			return false;
	}
});
