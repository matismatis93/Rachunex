if(Meteor.isClient){

Template.register.events({
'submit form': function(event, template){
    event.preventDefault();
    var nazwaVar = template.find('#register-nazwa').value;
    var emailVar = template.find('#register-email').value;
    var roleVar = template.find('#register-role').value;
    var passwordVar = template.find('#register-password').value;
    
    var users =[{name:nazwaVar,email:emailVar,roles:[roleVar]}];

    console.log(users);

    _.each(users, function (userData) {
      var id,
          user;
      
      console.log(userData);

        Accounts.createUser({
        email: userData.email,
        password: passwordVar,
        profile: { name: userData.name },
        // Roles.addUsersToRoles(id, userData.roles);
      });
      // console.log(id);

      // // email verification
      // Meteor.users.update({_id: id}, {$set:{'emails.0.verified': true}});

      // Roles.addUsersToRoles(id, userData.roles);
    
    });
  }
});

}

