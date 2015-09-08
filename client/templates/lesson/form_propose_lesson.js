
Template.formProposeLesson.events({
		"submit .register" : function(event){
		
					event.preventDefault();
					
					var data ={
							email : event.target.email.value,
							password : event.target.password.value};

					
					Meteor.call('addUser',data);
					Meteor.loginWithPassword({email : data.email},data.password);
					return false;
		},
		
		"submit .propose-lesson" : function(event,template){
					
					event.preventDefault();		
					var nom = event.target.lname.value;
					var prenom = event.target.fname.value;
					var birthday = event.target.birthday.value;
					var phone = event.target.phone.value;
					var userId=Meteor.userId();
					var data ={
								lname : nom,
								fname: prenom,
								birthday : birthday,
								phone : phone,
								userId:userId
								};
											
					Meteor.call('createCoach',data);						

					event.target.lname.value="";
					event.target.fname.value="";
					event.target.birthday.value="";
					event.target.phone.value="";
					
					Router.go('/propose-lesson/step-2');
					
					return false;
		},
		
		"click .back-home" : function(event) {
		
					event.preventDefault();
					
					Router.go('/');
		}
});



Template.formProposeLesson2.events({

		"submit .propose-lesson-2" : function(event,template){
					
					event.preventDefault();		
					var title = event.target.title.value;
					var description = event.target.description.value;
					var category = event.target.category.value;
					var nummax = event.target.nummax.value;
					var street = event.target.street.value;
					var zip = event.target.zip.value;
					var price = event.target.price.value;
					var userId= Meteor.userId();
					var data ={
								title:title,
								description:description,
								category : category,
								nummax : nummax,
								street : street,
								zip : zip,
								price:price,
								userId: userId
								};
											
					Meteor.call('createLesson',data);						

					event.target.title.value="";
					event.target.description.value="";
					event.target.category.value="";
					event.target.nummax.value="";
					event.target.street.value="";
					event.target.zip.value="";
					
					Router.go('/');
					
					return false;
		},
		
		"click .back-home" : function(event) {
		
					event.preventDefault();
					
					Router.go('/');
		}
});



