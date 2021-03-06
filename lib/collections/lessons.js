Lessons = new Mongo.Collection('lessons');

Meteor.methods({

		'createLesson' : function(data){
						/*check data*/
						
						var newLessonId = Lessons.insert(data);
						return newLessonId;
		},
		'updateLesson' : function(lessonId,data){
						/*check data*/		
						
						var isUpdated; 
						if(Lessons.update(lessonId,{$set : data}))
							{isUpdated = true;}
						else
							{isUpdated = false;}
						
						return isUpdated;
		},
		'removeLesson' : function(lessonId){
						
						var isRemoved; 
						if(Lessons.remove(lessonId))
							{isRemoved = true;}
						else
							{isRemoved = false;}
							
						return isRemoved;
		},
		'findLesson' : function(criteria){
					/* Criteria devra être de la forme : { name : 'Arbai' } */
					/* check criteria*/
					
					var lessonId = Lessons.find(criteria);
					return lessonId;
		},

		'activateLesson' : function(lessonId, key){
						var isUpdated; 
						if(Lessons.update(lessonId,{$set : key}))
							{isUpdated = true;}
						else
							{isUpdated = false;}
						
						return isUpdated;
		},
		
		'findLessons' : function(criteria){
				
				/*check data*/
				/*return only activated lessons*/
				
				var lessonsId = Lessons.find(criteria);
				
				return lessonsId;
		}
});
