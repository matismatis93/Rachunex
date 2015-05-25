if(Meteor.isClient){

var clearValues = function(){
$('#kNazwa').val("").focus();
$('#kAdres').val("");
$('#kNIP').val("");
}

Template.dodajKlienta.events({
'submit form': function(event, template){
    event.preventDefault();
    var nazwa = template.find('#kNazwa').value;
    var adres = template.find('#kAdres').value;
    var NiP = template.find('#kNIP').value;
    Tables.insert({nazwa:nazwa,adres:adres,NiP:NiP});
    clearValues();
}
});
}