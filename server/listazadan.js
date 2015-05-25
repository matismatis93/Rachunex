TaskList = new Mongo.Collection('zadania');

if (Meteor.isServer) {
	Meteor.startup(function () {
		TaskList.remove({'klient': {'$exists': true}});
		TaskList.insert({'klient': 'IQTECHNIC', 'zadanie': 'K. zakup', 'okres': '09/2014', 'data_do': '19/10/2014', 'data_zak': '19/10/2014', 'status': 'W toku', 'komentarz': '14-10-2014 - otrzymano dok. 15-10-2014 - kwota zakupów 4.956,80 zł wysł. do klienta do zatw.'});
		TaskList.insert({'klient': 'SILVAN', 'zadanie': 'D. VAT-7 mies.', 'okres': '10/2014', 'data_do': '25/11/2014', 'data_zak': '', 'status': 'Wstrzymany', 'komentarz': ''});
		TaskList.insert({'klient': 'ATEX', 'zadanie': 'D. VAT-7 wys. elektr.', 'okres': '10/2014', 'data_do': '25/11/2014', 'data_zak': '', 'status': 'Założony', 'komentarz': ''});
	});

	Meteor.publish("zadania", function () {
  	var user = Meteor.users.findOne({_id:this.userId});
  	if (Roles.userIsInRole(user, ["admin","management", "user"])) {
    console.log('Udostepniono uzytkownikowi', this.userId);
    return TaskList.find();
  	}

  	this.stop();
  	return;
	});
}
