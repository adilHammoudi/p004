Template.searchResults.onCreated(function(){

		if(Session.get('categoryResearched'))
			{
				var category = Session.get('categoryResearched');
				var location = Session.get('locationResearched');
				
				var criteria = { category : category};
//				var lessonsId = Meteor.call('findLessons', criteria);
				
				Meteor.subscribe('searchLessons', criteria);
			}
		else
			{ Router.go('/');}

});

Template.searchResults.helpers({

		lessons : function(){
					return Lessons.find();
		}
});
