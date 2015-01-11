Router.onBeforeAction(function() {
  if (! Meteor.userId()) {
    this.render('login');
  } else {
    this.next();
  }
});

Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function () {
  this.route('start', {
    path: '/',
  });


  this.route('klienci', {
  	path: '/klienci',
  	action: function(){
  	var user = Meteor.userId();
	if (Roles.userIsInRole(user, ["admin","management"]))
		this.render('klienci');
	else
		this.render('invalid-access');
	}
  });


    this.route('ListaZadan', {
  	path: '/lista',
  	action: function(){
  	var user = Meteor.userId();
	if (Roles.userIsInRole(user, ["admin","management"]))
		this.render('ListaZadan');
	else
		this.render('invalid-access');
	}
  });

    this.route('klientZadania', {
  	path: '/zadania',
    action: function(){
    var user = Meteor.userId();
  if (Roles.userIsInRole(user, ["user"]))
    this.render('klientZadania');
  else
    this.render('invalid-access');
  }
  });


    this.route('uzytkownicy', {
  	path: '/uzytkownicy',
  	action: function(){
  	var user = Meteor.userId();
	if (Roles.userIsInRole(user, ["admin"]))
		this.render('uzytkownicy');
	else
		this.render('invalid-access');
	}
  });


    this.route('dodajKlienta', {
  	path: '/dodajklienta',
  	action: function(){
  	var user = Meteor.userId();
	if (Roles.userIsInRole(user, ["admin"]))
		this.render('dodajKlienta');
	else
		this.render('invalid-access');
	}
  });

    this.route('dodajZadanie', {
    path: '/dodajzadanie',
    action: function(){
    var user = Meteor.userId();
  if (Roles.userIsInRole(user, ["admin", "management"]))
    this.render('dodajZadanie');
  else
    this.render('invalid-access');
  }
  });


  this.route('*', {
    template: 'not_found'
  });
});