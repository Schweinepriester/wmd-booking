$.widget("event.errorDialog", $.ui.dialog, {
	options: {
		autoOpen: false,
		modal: true		
	},
	
	open: function(message){
		this.element.find(".message").text(message);
		this._super();
	},
	
	_create: function() {
		var that = this;
		this.options.buttons = [
		{
			text: "Schließen",
			click: function(){
			  that.close();	
			}
		}];
	this._super();
	}
});