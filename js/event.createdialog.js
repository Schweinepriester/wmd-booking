$.widget("event.createDialog", $.ui.dialog, {
	options: {
		autoOpen: false,
		modal: true,
		width: 550
		
	},
	
	open: function(){
		// this._event = single_event;
		this._super();
		
		// this.element.find(".validation_message").empty();
		this.element.find("#create_title_field").removeClass("ui-state-error").val("");
		this.element.find("#create_date_field").val("");
		// this.element.find("#title_field").val(single_event.title);
		this.element.find("#create_starttime_field").val("");
		this.element.find("#create_endtime_field").val("");
		this.element.find("#create_notes_field").val("");

	},
	
	_create: function() {
		var that = this;
		// this.element.find("#due_date_field").datepicker({dateFormat: "yy-mm-dd"});
		this.options.buttons = [
		{
			text: "Speichern",
			click: function(){
			  that._createEvent();	
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
	
	_createEvent: function(){
		var single_event = {
			title: this.element.find("#create_title_field").val(),
			date: this.element.find("#create_date_field").val(),
			starttime: this.element.find("#create_starttime_field").val(),
			endtime: this.element.find("#create_endtime_field").val(),
			author: "Frontend!",
			notes: this.element.find("#create_notes_field").val()
		};
		$.ajax({
			type: "POST",
			url: "/wmd-booking/service/events",
			// headers: {"If-Match": this._event.version },
			data: single_event,
			success: function(){
				this._trigger("onEventCreated");
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