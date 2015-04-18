ListaKat = new Meteor.Collection('kategorie');


if (Meteor.isServer) {
Meteor.startup(function () {
ListaKat.remove({'kategoria': {'$exists': true}});
ListaKat.insert({'kategoria': 'Ksiegowania', 'zad': 'K. sprzedaz', 'opis':'księgowanie dokumentów sprzedaży (faktury/rachunki/paragony/itp)'});
ListaKat.insert({'kategoria': 'Ksiegowania', 'zad': 'K. zakup', 'opis': 'księgowanie dokumentów zakupów (faktury/rachunki/paragony/itp)'});
ListaKat.insert({'kategoria': 'Ksiegowania', 'zad': 'K. kilometrówka', 'opis': 'księgowanie kosztów samochodu prywatnego używanego do działalności'});
ListaKat.insert({'kategoria': 'Ksiegowania', 'zad': 'K. amortyzacja', 'opis': 'księgowanie amortyzacji środków trwałych'});
ListaKat.insert({'kategoria': 'Ksiegowania', 'zad': 'K. prowizje bankowe', 'opis': 'księgowanie kosztów związanych z rachunkami bankowymi'});
ListaKat.insert({'kategoria': 'Ksiegowania', 'zad': 'K. odsetki k/p', 'opis': 'księgowanie odsetek od kredytów i pożyczek'});
ListaKat.insert({'kategoria': 'Ksiegowania', 'zad': 'K. delegacje', 'opis': 'księgowanie kosztów delegacji służbowych'});
ListaKat.insert({'kategoria': 'Ksiegowania', 'zad': 'K. ZUS płatnika', 'opis': 'księgowanie składek ZUS pracowników w części finansowanej przez płatnika'});
ListaKat.insert({'kategoria': 'Ksiegowania', 'zad': 'K. ZUS właściciela', 'opis': 'księgowanie składek ZUS przedsiębiorcy (tylko FP lub FP i społeczne)'});
ListaKat.insert({'kategoria': 'Ksiegowania', 'zad': 'K. lista płac', 'opis': 'księgowanie listy płac (umowy o pracę)'});
ListaKat.insert({'kategoria': 'Ksiegowania', 'zad': 'K. cyw-prawn.', 'opis': 'księgowanie rachunków z umów cywilno-prawnych'});
ListaKat.insert({'kategoria': 'Deklaracje', 'zad': 'D. VAT-7 mies.', 'opis': 'sporządzenie deklaracji VAT-7 miesięcznej'});
ListaKat.insert({'kategoria': 'Deklaracje', 'zad': 'D. VAT-7 kw.', 'opis': 'sporządzenie deklaracji VAT-7 kwartalnej'});
ListaKat.insert({'kategoria': 'Deklaracje', 'zad': 'D. VAT wys. elektr.', 'opis': 'wysłanie deklaracji VAT drogą elektroniczną do US'});
ListaKat.insert({'kategoria': 'Deklaracje', 'zad': 'D. ZUS 10', 'opis': 'sporządzenie deklaracji ZUS wysyłanej do 10 dnia następnego miesiąca'});
ListaKat.insert({'kategoria': 'Deklaracje', 'zad': 'D. ZUS 15', 'opis': 'sporządzenie deklaracji ZUS wysyłanej do 15 dnia następnego miesiąca'});
ListaKat.insert({'kategoria': 'Deklaracje', 'zad': 'D. PIT-5 ZUS', 'opis': 'ujęcie zapłaconych składek ZUS właściciela w deklaracji PIT-5'});
ListaKat.insert({'kategoria': 'Deklaracje', 'zad': 'D. PIT-5 mies.', 'opis': 'wyliczenie miesięcznej zaliczki na podatek PIT-5'});
ListaKat.insert({'kategoria': 'Deklaracje', 'zad': 'D. PIT-5 kw.', 'opis': 'wyliczenie kwartalnej zaliczki na podatek PIT-5'});
ListaKat.insert({'kategoria': 'Deklaracje', 'zad': 'D. PIT-4', 'opis': 'wyliczenie miesięcznej zaliczki na podatek PIT-4'});
ListaKat.insert({'kategoria': 'Pozostale', 'zad': 'I. OT/LT', 'opis': 'ewidencja zakupu/likwidacji środka trwałego'});

    
  });

Meteor.publish("kategorie", function () {
  var user = Meteor.users.findOne({_id:this.userId});

  if (Roles.userIsInRole(user, ["admin","management"])) {
    console.log('Udostepnieniono uzytkownikowi', this.userId)
    return ListaKat.find();
  }

  this.stop();
  return;
});
}