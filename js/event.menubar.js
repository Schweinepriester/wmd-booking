$.widget("event.menubar", {
	
	_create: function() {
		var that = this;
		
		this.element.find(".show_events").click(function() {
			that._trigger("onShowEventsClicked");
			return false;
		});
		
		this.element.find(".create_event").click(function(){
			that._trigger("onCreateEventClicked");
			return false;
		});
		
		this._super();
	}
});