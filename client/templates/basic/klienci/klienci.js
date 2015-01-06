Tables = new Meteor.Collection('tables');

if(Meteor.isClient){

  Template.klienci.events({
  'dblclick .reactive-table tr': function (event) {
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

  var checkOrX = function (value) {
    var html;
    // first, normalize the value to a canonical interpretation
    if (typeof value === 'boolean')
      value = {
        support: value
      };

    if (value === null || value === undefined) {
      html = '<span style="color: orange; font-weight: bold">?</span>';
    } else {
      if (value.support === true)
        html = '<span style="color: green">&#10004;</span>'
      else if (value.support === false)
        html = '<span style="color: red">&#10008;</span>';
      else
        html = '<span style="color: lightblue">' + value.support + '</span>';
      if (value.link)
        html += ' (<a href="' + value.link + '">more</a>)';
      }
    return new Spacebars.SafeString(html);
  };

  Template.klienci.helpers({
    tables : function () {
      return Tables;
    },

    tableSettings : function () {
      return {
        rowsPerPage: 5,
        showNavigation: 'auto',
        showColumnToggles: true,
        fields: [
          {
            key: 'nazwa',
            label: 'Nazwa',
            fn: function (name, object) {
              var html = '<a name="' + name +'" target="_blank" href="' + object.url + '">' + name + '</a>';
              return new Spacebars.SafeString(html);
            }
          },
          {
            key: 'adres',
            label: 'Adres',
            fn: function (name, object) {
              var html = '<a name="' + name +'" target="_blank" href="' + object.url + '">' + name + '</a>';
              return new Spacebars.SafeString(html);
            }
          },
          {
            key: 'NIP',
            label: 'NIP',
            fn: function (name, object) {
              var html = '<a name="' + name +'" target="_blank" href="' + object.url + '">' + name + '</a>';
              return new Spacebars.SafeString(html);
            }
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