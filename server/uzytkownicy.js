if (Meteor.isServer) {

Meteor.startup(function () {

if (Meteor.users.find().fetch().length === 0) {

    console.log('Creating users: ');

	var users = [
        {name:"ATEX",email:"atex@rachunex.com",roles:['atex']},
        {name:"TEKSIM",email:"teksim@rachunex.com",roles:['teksim']},
        {name:"STOLTAP",email:"stoltap@rachunex.com",roles:['stoltap']},
        {name:"ELMAX",email:"elmax@rachunex.com",roles:['elmax']},
        {name:"CEZOS",email:"cezos@rachunex.com",roles:['cezos']},
        {name:"MARMUREX",email:"marmurex@rachunex.com",roles:['marmurex']},
        {name:"TUTIVILLUS",email:"tutivillus@rachunex.com",roles:['tutivillus']},
        {name:"APINTERIOR",email:"apinterior@rachunex.com",roles:['apinterior']},
        {name:"SIKLAWA",email:"siklawa@rachunex.com",roles:['siklawa']},
        {name:"IQTECHNIC",email:"iqtechnic@rachunex.com",roles:['iqtechnic']},
        {name:"SILVAN",email:"silvan@rachunex.com",roles:['silvan']},
        {name:"WALDFURTER",email:"waldfurter@rachunex.com",roles:['waldfurter']},
        {name:"ZABAJANA",email:"zabajana@rachunex.com",roles:['zabajana']},
        {name:"JOGOR",email:"jogor@rachunex.com",roles:['jogor']},
        {name:"MARITEX",email:"maritex@rachunex.com",roles:['maritex']},
        {name:"CANDELUX",email:"candelux@rachunex.com",roles:['candelux']},
        {name:"BIESIEKIERA",email:"biesiekiera@rachunex.com",roles:['biesiekiera']},
        {name:"RAMBOBAMBO",email:"rambobambo@rachunex.com",roles:['rambobambo']},
        {name:"CIACHMISTRZ ",email:"ciachmistrz@rachunex.com",roles:['ciachmistrz']},
        {name:"SAMFIX",email:"samfix@rachunex.com",roles:['samfix']},
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
