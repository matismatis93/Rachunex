TaskList = new Mongo.Collection('zadania');

if(Meteor.isClient) {

  Template.ListaZadan.rendered = function() {
  this.$('.datepicker').datepicker();
  $('.selectpicker').selectpicker();

}

Template.ListaZadan.helpers({
	
	zadania : function() {
		return TaskList;
	},

	zadaniaSettings : function () {
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

    showSelectedTask: function() {
      var selectedTask = Session.get('selectedTask');
      return TaskList.findOne(selectedTask);
    },

    showForm: function() {
      var showForm = Session.get('editTaskForm');
      return showForm;
    }
    
});

Template.ListaZadan.events({
    'dblclick .reactive-table tbody tr': function(event) {
    event.preventDefault();
    var taskId = this._id;
    var showForm = true;
    Session.set('selectedTask', taskId);
    Session.set('editTaskForm', showForm);
  },
  'submit form': function(event) {
    event.preventDefault();
    var taskKlientVar = event.target.zKlient.value;
    var taskZadanieVar = event.target.zZadanie.value;
    var taskOkresVar = event.target.zOkres.value;
    var taskDataDoVar = event.target.zDataDo.value;
    var taskDataZakVar = event.target.zDataZak.value;
    var taskStatusVar = event.target.zStatus.value;
    var taskKomentarzVar = event.target.zKomentarz.value;
    var noweDaneZadania = {klient: taskKlientVar, zadanie: taskZadanieVar, okres: taskOkresVar, data_do: taskDataDoVar, data_zak: taskDataZakVar, status: taskStatusVar, komentarz: taskKomentarzVar};
    TaskList.update({_id: Session.get('selectedTask')}, noweDaneZadania);
    var showForm = false;
    Session.set('editTaskForm', showForm);
  },
  'click .anuluj': function() {
    var showForm = false;
    Session.set('editTaskForm', showForm);
  }
})

}