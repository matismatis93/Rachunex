Tables = new Meteor.Collection('tables');


if (Meteor.isServer) {
Meteor.startup(function () {
Tables.remove({'nazwa': {'$exists': true}});
Tables.insert({'nazwa':'ATEX','adres':'Pułtusk, Białowiejska 19','NIP':'568-000-37-20'});
Tables.insert({'nazwa':'TEKSIM','adres':'Milicz, Stawna 11a','NIP':'916-00-02-277'});
Tables.insert({'nazwa':'STOLTAP','adres':'Gdynia, Poleska 20','NIP':'586-020-05-86'});
Tables.insert({'nazwa':'ELMAX','adres':'Gdańsk, Szczodra 43','NIP':' 584-09-60-609'});
Tables.insert({'nazwa':'CEZOS','adres':'Gdynia, Olgierda 88b','NIP':'586-001-84-56'});
Tables.insert({'nazwa':'MARMUREX','adres':'Nowa Wieś, Wspólna 2a','NIP':'534-22-62-852'});
Tables.insert({'nazwa':'TUTIVILLUS','adres':'Gdańsk, Braci Majewskich 14','NIP':'123-456-32-15'});
Tables.insert({'nazwa':'APINTERIOR','adres':'Elbląg, Dworcowy 3','NIP':'578-30-70-998'});
Tables.insert({'nazwa':'SIKLAWA','adres':'Zakopane, Krupówki 11','NIP':'736-14-37-928'});
Tables.insert({'nazwa':'IQTECHNIC','adres':'Buczkowice, Cienista 741','NIP':'937-254-64-38'});
Tables.insert({'nazwa':'SILVAN','adres':'Olecko, Jaśki 18c','NIP':'844-154-13-38'});
Tables.insert({'nazwa':'WALDFURTER','adres':'Opole, Głogowska 39','NIP':'754-306-75-49'});
Tables.insert({'nazwa':'ZABAJANA','adres':'Bochnia, Krzeczów 623','NIP':'527-26-52- 185'});
Tables.insert({'nazwa':'JOGOR','adres':'Łódź, omłotowa 12','NIP':'724-00-04-099'});
Tables.insert({'nazwa':'MARITEX','adres':'Warszawa, Chodakowska 53','NIP':'113-254-79-77'});
Tables.insert({'nazwa':'CANDELUX','adres':'Wołomin, 1 Maja 132','NIP':'952-19-17-579'});
Tables.insert({'nazwa':'BIESIEKIERA','adres':'Biesiekierz, Karlina 4','NIP':'669-11-76-459'});
Tables.insert({'nazwa':'RAMBOBAMBO','adres':'Kraków, Bolesława Roi 4a','NIP':'679-309-68-82'});
Tables.insert({'nazwa':'CIACHMISTRZ','adres':'Justynów, Asfaltowa 23','NIP':'837-101-34-55'});
Tables.insert({'nazwa':'SAMFIX','adres':'Gdańsk, Hallera 132','NIP':'583-026-77-81'});

    
  });

Meteor.publish("tables", function () {
  var user = Meteor.users.findOne({_id:this.userId});

  if (Roles.userIsInRole(user, ["admin","management"])) {
    console.log('Udostepnieniono uzytkownikowi', this.userId)
    return Tables.find();
  }

  this.stop();
  return;
});
}