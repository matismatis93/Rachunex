if(Meteor.isClient){

Deps.autorun(function () {

  var user = Meteor.user();

  Meteor.subscribe('tables');

  Meteor.subscribe('archiwum');

  Meteor.subscribe('users');

  Meteor.subscribe('zadania');
  
  Meteor.subscribe('kategorie');

  Meteor.subscribe('uploads');
});
}