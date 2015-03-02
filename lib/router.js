Router.configure({
layoutTemplate: 'homeworkList'
waitOn: function() { return Meteor.subscribe('homework'); }
});
Router.route('/', {name: 'homeworkList'});
name: 'homeworkPage'
});