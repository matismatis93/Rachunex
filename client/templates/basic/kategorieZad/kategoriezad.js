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
    },

    showSelectedKat: function() {
      var selectedKat = Session.get('selectedKat');
      return ListaKat.findOne(selectedKat);
    },

    showEditForm: function() {
      var showEditForm = Session.get('editKatForm');
      return showEditForm;
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

'submit .addForm': function(event){
    event.preventDefault();
    var kategoriaVar = event.target.kKategoria.value;
    var zadanieVar = event.target.kZad.value;
    var opisVar = event.target.kOpis.value;
    var NowaKategoria = {kategoria: kategoriaVar, zad: zadanieVar, opis: opisVar};
    ListaKat.insert(NowaKategoria);
    var showAddForm = false;
    Session.set('addKat', showAddForm);
},

'dblclick .reactive-table tbody tr': function(event) {
    event.preventDefault();
    var katId = this._id;
    var showEditForm = true;
    Session.set('selectedKat', katId);
    Session.set('editKatForm', showEditForm);
  },

  'click .anuluj2': function() {
    var showEditForm = false;
    Session.set('editKatForm', showEditForm);
  },

  'submit .editForm': function(event) {
    event.preventDefault();
    var kategoriaVar = event.target.eKategoria.value;
    var zadanieVar = event.target.eZad.value;
    var opisVar = event.target.eOpis.value;
    var ZmienionaKat = {kategoria: kategoriaVar, zad: zadanieVar, opis: opisVar};
    ListaKat.update({_id: Session.get('selectedKat')}, ZmienionaKat);
    var showEditForm = false;
    Session.set('editKatForm', showEditForm);
  },

  'click .usun': function(event) {
    event.preventDefault();
    var selectedKat = Session.get('selectedKat');
    var showEditForm = false;
    ListaKat.remove(selectedKat);
    Session.set('editKatForm', showEditForm);
  }
})

}