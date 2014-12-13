TaskList = new Mongo.Collection('zadania');

if(Meteor.isClient) {

Template.ListaZadan.helpers({
	
	zadania : function() {
		return TaskList;
	},

	zadaniaSettings : function () {
      return {
        rowsPerPage: 5,
        showNavigation: 'auto',
        showColumnToggles: true,
        fields: [
          {
            key: 'klient',
            label: 'Klient',
            fn: function (name, object) {
              var html = '<a name="' + name +'" target="_blank" href="' + object.url + '">' + name + '</a>';
              return new Spacebars.SafeString(html);
            }
          },
          {
            key: 'zadanie',
            label: 'Zadanie',
            /*fn: function (name, object) {
              var html = '<a name="' + name +'" target="_blank" href="' + object.url + '">' + name + '</a>';
              return new Spacebars.SafeString(html);
            }*/
          },
          {
            key: 'okres',
            label: 'Za okres',
            /*fn: function (name, object) {
              var html = '<a name="' + name +'" target="_blank" href="' + object.url + '">' + name + '</a>';
              return new Spacebars.SafeString(html);
            }*/
          },
          {
          	key: 'status',
          	label: 'Status',
          	/*fn: function (name, object) {
              var html = '<a name="' + name +'" target="_blank" href="' + object.url + '">' + name + '</a>';
              return new Spacebars.SafeString(html);
            }*/
          },
          {
          	key: 'data_do',
          	label: 'Realizacja do:',
          	/*fn: function (name, object) {
              var html = '<a name="' + name +'" target="_blank" href="' + object.url + '">' + name + '</a>';
              return new Spacebars.SafeString(html);
            }*/
          },
          {
          	key: 'komentarz',
          	label: 'Komentarz',
          	/*fn: function (name, object) {
              var html = '<a name="' + name +'" target="_blank" href="' + object.url + '">' + name + '</a>';
              return new Spacebars.SafeString(html);
            }*/
          }
        ]
      };
    }
});
}