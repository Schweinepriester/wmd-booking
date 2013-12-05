Ext.define("Eventliste.controller.AppController", {
	extend: "Ext.app.Controller",
	config: {
		control: {
			eventlist: {
				itemtap: "showEventDetails"
			},
			"#deletebutton": {
				tap: "showConfirmDeleteDialog"
			},
			main: {
				push: "showDeleteButton",
				pop: "hideDeleteButton"
			}
		},
		refs: {
			main: "main",
			eventForm: "eventform",
			deleteButton: "#deletebutton"
		}
	},
	showEventDetails: function(list, index, target, record){
		var main = this.getMain();
		var eventForm = Ext.widget("eventform");
		eventForm.setRecord(record);
		main.push(eventForm);
	},
	showConfirmDeleteDialog: function(){
		Ext.Msg.confirm("Löschen", "Wirklich löschen?", this.deleteEvent, this);
	},
	deleteEvent: function(buttonId){
		if(buttonId != "yes"){
			return;
		}
		var single_event = this.getEventForm().getRecord();
		var events = Ext.getStore("Events");
		events.remove(single_event);
		events.sync({
			callback: function(){
				this.getMain().pop();
			},
			scope: this
		});
	},
	showDeleteButton: function(){
		this.getDeleteButton().setHidden(false);
	},
	hideDeleteButton: function(){
		this.getDeleteButton().setHidden(true);
	}
});