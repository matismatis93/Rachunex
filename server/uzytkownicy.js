if (Meteor.isServer) {

Meteor.startup(function () {

if (Meteor.users.find().fetch().length === 0) {

    console.log('Creating users: ');

	var users = [
        {name:"ATEX",email:"atex@rachunex.com",roles:['user']},
        {name:"TEKSIM",email:"teksim@rachunex.com",roles:['user']},
        {name:"STOLTAP",email:"stoltap@rachunex.com",roles:['user']},
        {name:"ELMAX",email:"elmax@rachunex.com",roles:['user']},
        {name:"CEZOS",email:"cezos@rachunex.com",roles:['user']},
        {name:"MARMUREX",email:"marmurex@rachunex.com",roles:['user']},
        {name:"TUTIVILLUS",email:"tutivillus@rachunex.com",roles:['user']},
        {name:"APINTERIOR",email:"apinterior@rachunex.com",roles:['user']},
        {name:"SIKLAWA",email:"siklawa@rachunex.com",roles:['user']},
        {name:"IQTECHNIC",email:"iqtechnic@rachunex.com",roles:['user']},
        {name:"SILVAN",email:"silvan@rachunex.com",roles:['user']},
        {name:"WALDFURTER",email:"waldfurter@rachunex.com",roles:['user']},
        {name:"ZABAJANA",email:"zabajana@rachunex.com",roles:['user']},
        {name:"JOGOR",email:"jogor@rachunex.com",roles:['user']},
        {name:"MARITEX",email:"maritex@rachunex.com",roles:['user']},
        {name:"CANDELUX",email:"candelux@rachunex.com",roles:['user']},
        {name:"BIESIEKIERA",email:"biesiekiera@rachunex.com",roles:['user']},
        {name:"RAMBOBAMBO",email:"rambobambo@rachunex.com",roles:['user']},
        {name:"CIACHMISTRZ ",email:"ciachmistrz@rachunex.com",roles:['user']},
        {name:"SAMFIX",email:"samfix@rachunex.com",roles:['user']},
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
