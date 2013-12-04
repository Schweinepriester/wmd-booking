$.widget("event.editDialog", $.ui.dialog, {
	options: {
		autoOpen: false,
		modal: true,
		width: 550
		
	},
	
	open: function(single_event){
		this._event = single_event;
		this._super();
		
		this.element.find(".validation_message").empty();
		this.element.find("#title_field").removeClass("ui-state-error").val(single_event.title);
		this.element.find("#date_field").val(single_event.date);
		// this.element.find("#title_field").val(single_event.title);
		this.element.find("#starttime_field").val(single_event.starttime);
		this.element.find("#endtime_field").val(single_event.endtime);
		this.element.find("#notes_field").val(single_event.notes);

	},
	
	_create: function() {
		var that = this;
		// this.element.find("#due_date_field").datepicker({dateFormat: "yy-mm-dd"});
		this.options.buttons = [
		{
			text: "Speichern",
			click: function(){
			  that._updateEvent();	
			}
		},
		{
			text: "Abbrechen",
			click: function(){
			  that.close();	
			}
		}];
	this._super();
	},
	
	_updateEvent: function(){
		var single_event = {
			title: this.element.find("#title_field").val(),
			date: this.element.find("#date_field").val(),
			starttime: this.element.find("#starttime_field").val(),
			endtime: this.element.find("#endtime_field").val(),
			author: "Frontend!",
			notes: this.element.find("#notes_field").val()
		};
		$.ajax({
			type: "PUT",
			url: this._event.uri,
			headers: {"If-Match": this._event.version },
			data: single_event,
			success: function(){
				this._trigger("onEventUpdated");
				this.close();
				},
			error: function(request) {
				if (request.status == 400){	
					var validationMessages = $.parseJSON(request.responseText);
					if (validationMessages.title){
						this.element.find(".validation_message").text(validationMessages.title);
						this.element.find("#title_field").addClass("ui-state-error").focus();
					}	
				}
			},
		 
		context: this
		});
	} 
});