ArchList = new Mongo.Collection('archiwum');

if(Meteor.isClient) {
  
  Template.mArchiwum.helpers({
      archiwum : function () {
          return ArchList.find({status: "Zakończony"});

},
  mArchiwum : function () {
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