if(Meteor.isClient){

var clearValues = function(){
$('#zNazwa').val("").focus();
$('#kKat').val("").focus();
$('#zZadanie').val("");
$('#zZaokres').val("");
$('#zRealizacja').val("");
$('#zKomenatarz').val("");
}


Template.dodajZadanie.helpers({
	listaKlientow: function () {
		return Tables.find({},{sort: {nazwa: 1}});		
	},
    listaZad: function () {
        var kategoriaZadania = template.find('#zKat').value;
        return ListaKat.find({kategoria: kategoriaZadania},{id: 0, kategorie: 0});
    }
});

Template.dodajZadanie.rendered = function() {
  this.$('.datepicker').datepicker();
  $('.selectpicker').selectpicker();

}
Template.dodajZadanie.events({
'submit form': function(event, template){
    event.preventDefault();
    var nazwa = template.find('#zNazwa').value;
    var zadanie = template.find('#zZadanie').value;
    var okres = template.find('#zZaokres').value;
    var status = "Założony";
    var data_do = template.find('#zRealizacja').value;
    var komentarz = template.find('#zKomenatarz').value;
    TaskList.insert({klient:nazwa, zadanie:zadanie, okres:okres, status:status, data_do:data_do, komentarz:komentarz});
    clearValues();
}
});

}