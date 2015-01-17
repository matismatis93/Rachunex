if(Meteor.isClient){

Deps.autorun(function () {

  var user = Meteor.user();

  Meteor.subscribe('tables');

  Meteor.subscribe('users');

  Meteor.subscribe('zadania');
});
}