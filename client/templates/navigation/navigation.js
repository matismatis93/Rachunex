if(Meteor.isClient){
	
	Template.navigation.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
        window.location="http://rachunex.meteor.com";
    }
});

}
