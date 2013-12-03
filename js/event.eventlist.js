$.widget("event.eventlist", {

	reload: function() {
	this.element.find(".event:not(.template)").remove();
		$.ajax({
			dataType: "json",
			url:"./service/events",
			success: this._appendEvents,
			context: this
		});
	},

	_create: function() {
		$.ajax({
			dataType: "json",
			url:"./service/events",
			success: this._appendEvents,
			context: this
		});
	},
	
	_appendEvents: function(events) {
		var that = this;
		$.each(events, function(i, single_event){
			var eventElement = that.element.find(".template").clone().removeClass("template");
			eventElement.find(".title").text(single_event.title);
			eventElement.find(".date").text(single_event.date);
			eventElement.find(".author").text(single_event.author);
			eventElement.click(single_event.uri, function(event){
				that._trigger("onEventClicked", null, event.data);
			});
			eventElement.find(".delete_event").click(single_event, function(event) {
				that._trigger("onDeleteEventClicked", null, event.data);
				return false;
			});
			eventElement.find(".edit_event").click(single_event, function(event) {
				that._trigger("onEditEventClicked", null, event.data);
				return false;
			});
			that.element.append(eventElement);
		});
	}
});