Ext.define("Eventliste.model.Event", {
	extend: "Ext.data.Model",
	config:{
		fields:[
			{name: "title"},
			{name: "author"},
			{name: "date", type: "date"},
			{name: "starttime"},
			{name: "endtime"},
			{name: "duration"},
			{name: "notes"},
			{name: "version"}
		],
		idProperty: "uri"
	}

});