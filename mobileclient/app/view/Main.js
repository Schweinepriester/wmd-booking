Ext.define('Eventliste.view.Main', {
// extend: "Ext.Panel",
extend: "Ext.navigation.View",
xtype: "main",
	config: {
		items: {
			xtype: "eventlist",
		},
	defaultBackButtonText: "Zurück"
	}
});
