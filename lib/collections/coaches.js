Coaches = new Mongo.Collection("coaches");

Meteor.methods({
		'createCoach' : function(data){
						/*check data*/
						
						var newCoachId = Coaches.insert(data);
						return newCoachId;
		},
		'updateCoach' : function(coachId,data){
						/*check data*/		
						
						var isUpdated; 
						if(Coaches.update(coachId,{$set : data}))
							{isUpdated = true;}
						else
							{isUpdated = false;}
						
						return isUpdated;
		},
		'removeCoach' : function(coachId){
						
						var isRemoved; 
						if(Coaches.remove(coachId))
							{isRemoved = true;}
						else
							{isRemoved = false;}
							
						return isRemoved;
		},
		'findCoach' : function(criteria){
					/* Criteria devra être de la forme : { name : 'Arbai' } */
					/* check criteria*/
					
					var coachId = Coaches.find(criteria);
					return coachId;
		},

		'activateCoach' : function(coachId, key){
						var isUpdated; 
						if(Coaches.update(coachId,{$set : key}))
							{isUpdated = true;}
						else
							{isUpdated = false;}
						
						return isUpdated;
		},
		
		'findCoaches' : function(criteria){
				
				/*check data*/
				/*return only activated lessons*/
				
				var coachesId = Coaches.find(criteria);
				
				return coachesId;
		}
});
