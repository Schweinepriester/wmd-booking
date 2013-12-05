Ext.define("Eventliste.view.MessageBox", {
	override: "Ext.MessageBox",
	statics: {
		OK: {
			text: "OK",
			itemId: "ok",
			ui: "action"
		},
		YES: {
			text: "Ja",
			itemId: "yes",
			ui: "action"
		},
		NO: {
			text: "Nein",
			itemId: "Nein"
		},
		CANCEL: {
			text: "Abbrechen",
			itemId: "cancel"
		},
		OKCANCEL: [
			{
				text: "Abbrechen",
				itemId: "cancel"
			},
			{
				text: "OK",
				itemId: "ok",
				ui: "action"
			}
		],
		YESNOCANCEL: [
			{ text: "Abbrechen", itemId: "cancel" },
			{ text: "Nein", itemId: "no" },
			{ text: "Ja", itemId: "yes", ui: "action" }
		],
		YESNO: [
			{ text: "Ja", itemId: "yes", ui: "action" },
			{ text: "Nein", itemId: "no" }
		] 
	}
});
