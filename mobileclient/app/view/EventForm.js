Ext.define("Eventliste.view.EventForm", {
	extend: "Ext.form.Panel",
	xtype: "eventform",
	config: {
		items: [{
			xtype: "textfield",
			name: "title",
			label: "Titel",
			readOnly: true
		},{
			xtype: "textfield",
			name: "author",
			label: "Autor",
			readOnly: true
		},{
			xtype: "datepickerfield",
			name: "date",
			label: "Fälligkeit",
			readOnly: true,
			dateFormat: "d.m.Y"
		},{
			xtype: "textareafield",
			name: "notes",
			label: "Bemerkungen",
			readOnly: true
		}]
	}
});