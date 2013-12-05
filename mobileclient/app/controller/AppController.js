Ext.define("Eventliste.controller.AppController", {
	extend: "Ext.app.Controller",
	config: {
		control: {
			eventlist: {
				itemtap: "showEventDetails"
			}
		},
		refs: {
			main: "main"
		}
	},
	showEventDetails: function(list, index, target, record){
		var main = this.getMain();
		var eventForm = Ext.widget("eventform");
		eventForm.setRecord(record);
		main.push(eventForm);
	}
});