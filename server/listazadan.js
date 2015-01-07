TaskList = new Mongo.Collection('zadania');

if (Meteor.isServer) {
	Meteor.startup(function () {
		TaskList.remove({'klient': {'$exists': true}});
		TaskList.insert({'klient': 'SILVAN', 'zadanie': 'K. sprzedaż', 'okres': '09/2014', 'data_do': '19/10/2014', 'data_zak': '16-10-2014', 'status': 'Zakończony', 'komentarz': 'kwota sprzedaży 5.456,80 zł - klient potwierdził kwotę.'});
		TaskList.insert({'klient': 'IQTECHNIC', 'zadanie': 'K. zakup', 'okres': '09/2014', 'data_do': '19/10/2014', 'data_zak': '19/10/2014', 'status': 'W toku', 'komentarz': '14-10-2014 - otrzymano dok. 15-10-2014 - kwota zakupów 4.956,80 zł wysł. do klienta do zatw.'});
		TaskList.insert({'klient': 'CANDELUX', 'zadanie': 'K. amortyzacja', 'okres': '09/2014', 'data_do': '19/10/2014', 'data_zak': '19/10/2014', 'status': 'Zakończony', 'komentarz': 'kwota bez zmian - jak w miesiącu poprzednim'});
		TaskList.insert({'klient': 'CANDELUX', 'zadanie': 'K. prowizje bankowe', 'okres': '09/2014', 'data_do': '19/10/2014', 'data_zak': '18/10/2014', 'status': 'Zakończony', 'komentarz': 'kwota prowizji: 47,12 zł'});
		TaskList.insert({'klient': 'IQTECHNIC', 'zadanie': 'K. ZUS właściciela', 'okres': '09/2014', 'data_do': '19/10/2014', 'data_zak': '16/10/2014', 'status': 'Zakończony', 'komentarz': 'zapłacony FP za 08.2014 dnia 10.09/2014 w kwocie 58,02.'});
		TaskList.insert({'klient': 'IQTECHNIC', 'zadanie': 'D. VAT-7 mies.', 'okres': '09/2014', 'data_do': '25/10/2014', 'data_zak': '24/10/2014', 'status': 'Zakończony', 'komentarz': '19/10/2014 - kwota VAT 1.420 zł wysł. do klienta do zatw. 24-10-2014 - klient potwierdził kwotę.'});
		TaskList.insert({'klient': 'CANDELUX', 'zadanie': 'D. VAT-7 wys. elektr.', 'okres': '09/2014', 'data_do': '25-10-2014', 'data_zak': '25/10/2014', 'status': 'Zakończony', 'komentarz': '24-10-2014 - deklaracja wysłana do US. 25-10-2014 - odebrane potwierdzenie z US.'});
		TaskList.insert({'klient': 'CEZOS', 'zadanie': 'D. ZUS 10', 'okres': '09/2014', 'data_do': '10/10/2014', 'data_zak': '09/10/2014', 'status': 'Zakończony', 'komentarz': '09-10-2014 - deklaracja wysłana do ZUS i potwierdzona.'});
		TaskList.insert({'klient': 'ATEX', 'zadanie': 'D. PIT-5 ZUS', 'okres': '09/2014', 'data_do': '20/10/2014', 'data_zak': '19/10/2014', 'status': 'Zakończony', 'komentarz': 'Klient we wrześniu nie opłacił żadnych składek ZUS - informacja mailowa.'});
		TaskList.insert({'klient': 'ATEX', 'zadanie': 'D. PIT-5 mies', 'okres': '09/2014', 'data_do': '20/10/2014', 'data_zak': '19/10/2014', 'status': 'Zakończony', 'komentarz': '19/10/2014 - kwota zaliczki 320 zł wysł. do klienta do zatw. 19/10/2014 - klient potwierdził kwotę.'});
		TaskList.insert({'klient': 'ATEX', 'zadanie': 'K. sprzedaż', 'okres': '10/2014', 'data_do': '19/11/2014', 'data_zak': '', 'status': 'Zakończony', 'komentarz': '17-11-2014 - otrzymano dok. 17-11-2014 kwota sprzedaży wysłana do zatw. Czekam na potw. klienta.'});
		TaskList.insert({'klient': 'CEZOS', 'zadanie': 'K. zakup', 'okres': '10/2014', 'data_do': '19/11/2014', 'data_zak': '', 'status': 'Zakończony', 'komentarz': '17-11-2014 - otrzymano dok. 19-11-2014 - kwota zakupów wysł. do klienta do zatw. Klient poinf. że dostarczy jeszcze dokumenty zakupu.'});
		TaskList.insert({'klient': 'CEZOS', 'zadanie': 'K. amortyzacja', 'okres': '10/2014', 'data_do': '19/11/2014', 'data_zak': '17/11/2014', 'status': 'Zakończony', 'komentarz': 'kwota bez zmian - jak w poprz. miesiącu'});
		TaskList.insert({'klient': 'CEZOS', 'zadanie': 'K. prowizje bankowe', 'okres': '10/2014', 'data_do': '19/11/2014', 'data_zak': '17/11/2014', 'status': 'Zakończony', 'komentarz': 'kwota prowizji: 36,90 zł'});
		TaskList.insert({'klient': 'SILVAN', 'zadanie': 'K. ZUS właściciela', 'okres': '10/2014', 'data_do': '19/11-2014', 'data_zak': '17/11/2014', 'status': 'Zakończony', 'komentarz': 'zapłacony FP za 09/2014 dnia 09.10/2014 w kwocie 58,02.'});
		TaskList.insert({'klient': 'SILVAN', 'zadanie': 'D. VAT-7 mies.', 'okres': '10/2014', 'data_do': '25/11/2014', 'data_zak': '', 'status': 'Wstrzymany', 'komentarz': ''});
		TaskList.insert({'klient': 'SILVAN', 'zadanie': 'D. VAT-7 wys. elektr.', 'okres': '10/2014', 'data_do': '25/11/2014', 'data_zak': '', 'status': 'Założony', 'komentarz': ''});
	});

	Meteor.publish("zadania", function () {
  	var user = Meteor.users.findOne({_id:this.userId});

  	if (Roles.userIsInRole(user, ["admin","management"])) {
    console.log('Udostepniono uzytkownikowi', this.userId);
    return TaskList.find();
  	}

  	this.stop();
  	return;
	});
}