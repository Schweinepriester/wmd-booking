Ext.define("Eventliste.view.EventList", {
	extend: "Ext.dataview.List",
	xtype: "eventlist",
	requires: [ "Ext.plugin.PullRefresh"],
	config: {
		title: "Eventliste",
		store: "Events",
		itemTpl: "<div><strong>{title}</strong> am {date:date('d.m.Y')}</div>",
		emptyText: "Keine Veranstaltungen",
		plugins: [{
			// xclass : "Ext.plugin.PullRefresh",
			type: "pullrefresh",
			pullText: "Zum Aktualisieren herunterziehen",
			releaseText: "Zum Aktualisieren loslassen",
			loadingText: "Laden...",
			loadedText: " ",
			lastUpdatedText: " ",
			lastUpdatedDateFormat: " "
		}]
	}
	
});