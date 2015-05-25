if(Meteor.isClient){
	
	Template.navigation.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
        window.location="http://localhost:3000";
    }
});

}
