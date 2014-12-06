if(Meteor.isClient){

Deps.autorun(function () {
  // register dependency on user so subscriptions
  // will update once user has logged in
  var user = Meteor.user();

  // secrets
  Meteor.subscribe('tables');

  // users, for manage-users page
  Meteor.subscribe('users');
});
}