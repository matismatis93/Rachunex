Tables = new Meteor.Collection('klienci');

if (Meteor.isServer) {
Meteor.startup(function () {
Tables.remove({'nazwa': {'$exists': true}});
Tables.insert({'nazwa':'apx','adres':'Gdańsk','NiP':'123-456-32-18'});
Tables.insert({'nazwa':'mmx','adres':'Gdynia','NiP':'123-456-32-17'});
Tables.insert({'nazwa':'khx','adres':'Kartuzy','NiP':'123-456-32-16'});
Tables.insert({'nazwa':'jfx','adres':'Kiełpino','NiP':'123-456-32-15'});
    


  });
}