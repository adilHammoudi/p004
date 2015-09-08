Template.searchBar.helpers({
	
});

Template.searchBar.events({
	"submit form" : function(event){
				event.preventDefault();	
		
				var category = event.target.category.value;
				var location = event.target.location.value;
				
				Session.set('categoryResearched', category);
				Session.set('locationResearched', location);			
				
				data = { category : category,
						location : location};
						
			 	event.target.category.value ="";
				event.target.location.value ="";
				
				Router.go('/search', data);		
	}
});
