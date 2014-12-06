if (Meteor.isServer) {

Meteor.startup(function () {

if (Meteor.users.find().fetch().length === 0) {

    console.log('Creating users: ');

	var users = [
        {name:"Adam Nowak",email:"anowak@rachunex.com",roles:['user']},
        {name:"Jan Kowalski",email:"jkowalski@rachunex.com",roles:['user']},
        {name:"Krystyna Karwowska",email:"kkarwowska@rachunex.com",roles:['management']},
        {name:"Admin User",email:"admin@rachunex.com",roles:['admin']}
      ];

    _.each(users, function (userData) {
      var id,
          user;
      
      console.log(userData);

      id = Accounts.createUser({
        email: userData.email,
        password: "apple1",
        profile: { name: userData.name }
      });

      // email verification
      Meteor.users.update({_id: id}, {$set:{'emails.0.verified': true}});

      Roles.addUsersToRoles(id, userData.roles);
    
    });
  }

  });
}
