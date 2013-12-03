$.widget("event.deleteDialog", $.ui.dialog, {
	options: {
		autoOpen: false,
		modal: true		
	},
	
	open: function(single_event){
		this._event = single_event;
		this._super();
	},
	
	_create: function() {
		var that = this;
		this.options.buttons = [
		{
			text: "OK",
			click: function(){
			  that._deleteTodo();	
			}
		},
		{
			text: "Abbrechen",
			click: function(){
			  that.close();	
			}
		}
		];
	this._super();
	},
	
	_deleteTodo: function(){
		this.close();
		$.ajax({
			type: "DELETE",
			url:this._event.uri,
			success: function(){
				this._trigger("onEventDeleted");
				},
		context: this
		});
	}
});