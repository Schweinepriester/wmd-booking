Ext.define("Eventliste.view.EventList", {
	extend: "Ext.dataview.List",
	xtype: "eventlist",
	requires: [ "Ext.plugin.PullRefresh"],
	config: {
		plugins: [
		{ xclass: "Ext.plugin.PullRefresh"
		}],
		title: "Eventliste",
		store: "Events",
		itemTpl: "<div><strong>{title}</strong> von {author}</div>",
		emptyText: "Keine Veranstaltungen"
	}
	
});