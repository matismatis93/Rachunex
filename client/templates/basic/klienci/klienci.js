Tables = new Meteor.Collection('tables');

if(Meteor.isClient){

  Template.klienci.events({
  'click .reactive-table tbody tr': function (event) {
    event.preventDefault();
    var clientId = this._id;
    var showForm = true;
    Session.set('selectedClient', clientId);
    Session.set('editClientForm', showForm);
  },
  'submit form': function(event) {
    event.preventDefault();
    var clientNazwaVar = event.target.klNazwa.value;
    var clientAdresVar = event.target.klAdres.value;
    var clientNIPVar = event.target.klNIP.value;
    var noweDaneKlienta = {nazwa: clientNazwaVar, adres: clientAdresVar, NIP: clientNIPVar};
    Tables.update({_id: Session.get('selectedClient')}, noweDaneKlienta);
    var showForm = false;
    Session.set('editClientForm', showForm);
  },
  'click .anuluj': function() {
    var showForm = false;
    Session.set('editClientForm', showForm);
  }
  });

  Template.klienci.helpers({
    tables : function () {
      return Tables;
    },

    tableSettings : function () {
      return {
        rowsPerPage: 7,
        showNavigation: 'auto',
        showColumnToggles: true,
        fields: [
          {
            key: 'nazwa',
            label: 'Nazwa',
          },
          {
            key: 'adres',
            label: 'Adres',
          },
          {
            key: 'NIP',
            label: 'NIP',
          },
        ]
      };
    },
    showSelectedClient: function() {
      var selectedClient = Session.get('selectedClient');
      return Tables.findOne(selectedClient);
    },
    showForm: function() {
      var showForm = Session.get('editClientForm');
      return showForm;
    }
  });
}