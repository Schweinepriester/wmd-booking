Ext.define("Eventliste.view.EventForm", {
	extend: "Ext.form.Panel",
	requires: [ "Ext.field.DatePicker"],
	xtype: "eventform",
	config: {
		items: [{
			xtype: "textfield",
			name: "title",
			label: "Titel",
			readOnly: true
		},{
			xtype: "datepickerfield",
			name: "date",
			label: "Datum",
			readOnly: true,
			dateFormat: "d.m.Y"
		},{
			xtype: "textfield",
			name: "starttime",
			label: "Von",
			readOnly: true
		},{
			xtype: "textfield",
			name: "endtime",
			label: "Bis",
			readOnly: true
		},{
			xtype: "textfield",
			name: "duration",
			label: "Dauer",
			readOnly: true
		},{
			xtype: "textfield",
			name: "author",
			label: "Autor",
			readOnly: true
		},{
			xtype: "textareafield",
			name: "notes",
			label: "Notizen",
			readOnly: true
		}]
	}
});