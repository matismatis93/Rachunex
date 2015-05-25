ArchList = new Mongo.Collection('archiwum');

if (Meteor.isServer) {
	Meteor.startup(function () {
		ArchList.remove({'klient': {'$exists': true}});
		ArchList.insert({'klient': 'ATEX', 'zadanie': 'D. PIT-5 mies', 'okres': '09/2014', 'data_do': '20/10/2014', 'data_zak': '19/10/2014', 'status': 'Zakończony', 'komentarz': '19/10/2014 - kwota zaliczki 320 zł wysł. do klienta do zatw. 19/10/2014 - klient potwierdził kwotę.'});
		ArchList.insert({'klient': 'ATEX', 'zadanie': 'K. sprzedaż', 'okres': '10/2014', 'data_do': '19/11/2014', 'data_zak': '', 'status': 'Zakończony', 'komentarz': '17-11-2014 - otrzymano dok. 17-11-2014 kwota sprzedaży wysłana do zatw. Czekam na potw. klienta.'});
		ArchList.insert({'klient': 'CEZOS', 'zadanie': 'K. zakup', 'okres': '10/2014', 'data_do': '19/11/2014', 'data_zak': '', 'status': 'Zakończony', 'komentarz': '17-11-2014 - otrzymano dok. 19-11-2014 - kwota zakupów wysł. do klienta do zatw. Klient poinf. że dostarczy jeszcze dokumenty zakupu.'});
		ArchList.insert({'klient': 'CEZOS', 'zadanie': 'K. amortyzacja', 'okres': '10/2014', 'data_do': '19/11/2014', 'data_zak': '17/11/2014', 'status': 'Zakończony', 'komentarz': 'kwota bez zmian - jak w poprz. miesiącu'});
		ArchList.insert({'klient': 'CEZOS', 'zadanie': 'K. prowizje bankowe', 'okres': '10/2014', 'data_do': '19/11/2014', 'data_zak': '17/11/2014', 'status': 'Zakończony', 'komentarz': 'kwota prowizji: 36,90 zł'});
		ArchList.insert({'klient': 'SILVAN', 'zadanie': 'K. ZUS właściciela', 'okres': '10/2014', 'data_do': '19/11-2014', 'data_zak': '17/11/2014', 'status': 'Zakończony', 'komentarz': 'zapłacony FP za 09/2014 dnia 09.10/2014 w kwocie 58,02.'});
		ArchList.insert({'klient': 'SILVAN', 'zadanie': 'D. VAT-7 mies.', 'okres': '10/2014', 'data_do': '25/11/2014', 'data_zak': '', 'status': 'Wstrzymany', 'komentarz': ''});
		ArchList.insert({'klient': 'SILVAN', 'zadanie': 'D. VAT-7 wys. elektr.', 'okres': '10/2014', 'data_do': '25/11/2014', 'data_zak': '', 'status': 'Założony', 'komentarz': ''});
	});

	Meteor.publish("archiwum", function () {
  	var user = Meteor.users.findOne({_id:this.userId});
  	if (Roles.userIsInRole(user, ["admin","management", "user"])) {
    console.log('Udostepniono uzytkownikowi', this.userId);
    return ArchList.find();
  	}

  	this.stop();
  	return;
	});
}