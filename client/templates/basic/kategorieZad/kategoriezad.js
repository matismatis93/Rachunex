ListaKat = new Mongo.Collection('kategorie');

if(Meteor.isClient) {

  Template.kategorieZad.rendered = function() {
  this.$('.datepicker').datepicker();
  $('.selectpicker').selectpicker();

}

Template.kategorieZad.helpers({
	
	kategorie : function() {
		return ListaKat;
	},

	kategorieSettings : function () {
      return {
        rowsPerPage: 7,
        showNavigation: 'auto',
        showColumnToggles: true,
        fields: [
          { key: 'kategoria', label: 'Kategoria' },
          { key: 'zad', label: 'Zadanie' },
          { key: 'opis', label: 'Opis' },
        ]
      };
    },

    showAddForm: function() {
      var showAddForm = Session.get('addKat');
      return showAddForm;
    }
    
});

Template.kategorieZad.events({

'click .addnew': function(event) {
  event.preventDefault();
  var showAddForm = true;
  Session.set('addKat', showAddForm);
  },

'click .anuluj': function() {
  var showAddForm = false;
  Session.set('addKat', showAddForm);
  },

'submit form': function(event, template){
    event.preventDefault();
    var kategoria = template.find('#kKategoria').value;
    var zadanie = template.find('#kZad').value;
    var opis = template.find('#kOpis').value;
    ListaKat.insert({klient:nazwa, zadanie:zadanie, okres:okres, status:status, data_do:data_do, komentarz:komentarz});
    clearValues();
}

})

}