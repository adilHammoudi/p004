Router.configure({
	layoutTemplate: 'layout'
});

Router.route('/',{
		layoutTemplate: 'layout',
		template : 'home'});

Router.route('/propose-lesson/step-1', {
		layoutTemplate : 'layout',
		template : 'formProposeLesson'});
		
Router.route('/propose-lesson/step-2',{
		layoutTemplate : 'layout',
		template : 'formProposeLesson2'
});

Router.route('/search', { 
		layoutTemplate : 'layout',
		template : 'searchResults',
});

Router.route('/subscribe/:lessonId',{
		layoutTemplate: 'layout',
		template:'reservation',
		data : function(){
			return Lessons.findOne({_id: this.params.lessonId});
		}
});

Router.route('/subscribe/registration/:lessonId', {
		layoutTemplate : 'layout',
		template: 'reservationWS',
		data : function(){
			return Lessons.findOne({_id: this.params.lessonId});
		}
});
