if(Meteor.isClient){

Template.register.events({
'submit form': function(event, template){
    event.preventDefault();
    var emailVar = template.find('#register-email').value;
    var passwordVar = template.find('#register-password').value;
    Accounts.createUser({
        email: emailVar,
        password: passwordVar
    });
    Accounts.onCreateUser(function(options, user){
  	var role = ['admin'];
  	user.roles = role
  	return user;
});
}
});

}