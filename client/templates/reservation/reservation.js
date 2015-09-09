Template.reservation.onCreated(function(){
	if(! Meteor.userId()){
		this.render('/subscribe/login');
	}
});

Template.reservation.helpers({
		'title':function(){
			return this.title;
		}
});

Template.reservation.events({
	"click .back-home" : function(event){
			event.preventDefault();
			
			Router.go('/');
			return false;
	},
	
	"submit .payment" : function(event){
		event.preventDefault();
		var isPaid = false;
		
		window.alert("Paiement procédé !");
		
		var prenom = event.target.lname.value;
		var nom = event.target.fname.value;
		var street = event.target.street.value;
		var nr_appt = event.target.nr_appt.value;
		var city = event.target.city.value;
		var zip = event.target.zip_code.value;
		var userId = Meteor.userId();

		var facturationAdress = { fname : nom,
								  lname : prenom,
								  street : street,
								  nr_appt : nr_appt,
								  city : city,
								  zip : zip
								  };
								  
		Meteor.call("updateUser", {facturation : facturationAdress});
	
//		var lessonId = this.params.lessonId;
		var lessonId=Session.get("lessonId");
		
		var data = {
				lessonId : lessonId,
				userId : userId,
				isPaid : isPaid,
				facturation : facturationAdress,
		};
		
		var reservationId=Meteor.call("createReservation",data);
		
		Session.set("reservationId", reservationId);

		window.alert("Adresse de facturation ajoutée");
		
		Router.go('/subscribe/confirmation');
		
		return false;
	}
});

Template.confirmation_reservation.events({
	"click .back-home" : function(event){
			event.preventDefault();
			
			Router.go('/');
			return false;
	}
});