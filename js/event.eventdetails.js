$.widget("event.eventDetails", {	
	load: function(eventUri){
		$.ajax({
			dataType: "json",
			url: eventUri,
			success: this._setEvent,
			context: this
		});
		},
	
	_setEvent:
		function(single_event){		
			var eventElement = this.element;
			eventElement.find(".title").text(single_event.title);
			eventElement.find(".date").text(single_event.date);
			eventElement.find(".starttime").text(single_event.starttime);
			eventElement.find(".endtime").text(single_event.endtime);
			eventElement.find(".duration").text(single_event.duration);
			eventElement.find(".author").text(single_event.author);
			eventElement.find(".notes").text(single_event.notes);
		}
	
});