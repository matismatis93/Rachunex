if(Meteor.isClient) {
  
  Template.klientZadania.helpers({
      tables : function () {
        var user = Meteor.user();
        var name = user.profile.name;

          return TaskList.find({klient: name});

},
  kZadaniaSettings : function () {
      return {
        rowsPerPage: 7,
        showNavigation: 'auto',
        showColumnToggles: true,
        fields: [
          { key: 'klient', label: 'Klient' },
          { key: 'zadanie', label: 'Zadanie' },
          { key: 'okres', label: 'Okres' },
          { key: 'data_do', label: 'Termin' },
          { key: 'status', label: 'Status' },
          { key: 'komentarz', label: 'Komentarz' },
          { key: 'data_zak', label: 'Zrealizowane dnia:' }
        ]
      };
    },
  });

}