Ext.define("Eventliste.store.Events", {
	extend: "Ext.data.Store",
	requires: [
		"Ext.data.proxy.Rest",
		"Ext.MessageBox"
	],
	config: {
		proxy: {
			type: "rest",
			url: "/wmd-booking/service/events",
			reader: {
				type: "json"
			},
			listeners: {
				exception: function(proxy, request){
					Ext.Msg.alert("Fehler", response.statusText);
				}
			}
		},
		autoLoad: true,
		model: "Eventliste.model.Event"
	}
});