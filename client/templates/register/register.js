if(Meteor.isClient){

Template.register.events({
'submit form': function(event, template){
    event.preventDefault();
    var nazwaVar = template.find('#register-nazwa').value;
    var emailVar = template.find('#register-email').value;
    var passwordVar = template.find('#register-password').value;
    id = Accounts.createUser({
    	nazwa: nazwaVar,
        email: emailVar,
        password: passwordVar,
    });
  }
});

}