Tables = new Meteor.Collection('tables');
if(Meteor.isClient){


  Template.klienci.events({
  'click .reactive-table tr': function (event) {
    event.preventDefault();
    var tables = this;
    // checks if the actual clicked element has the class `delete`
    var accept = confirm("Czy na pewno usunąć?");
    if (accept == true)
      Tables.remove(tables._id)
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
            label: 'adres',
            fn: function (name, object) {
              var html = '<a name="' + name +'" target="_blank" href="' + object.url + '">' + name + '</a>';
              return new Spacebars.SafeString(html);
            }
          },
          {
            key: 'NiP',
            label: 'NIP',
            fn: function (name, object) {
              var html = '<a name="' + name +'" target="_blank" href="' + object.url + '">' + name + '</a>';
              return new Spacebars.SafeString(html);
            }
          },
        ]
      };
    }
  });
}