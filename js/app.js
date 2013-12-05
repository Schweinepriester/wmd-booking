$(function(){ // onload...
	
	$(document).ajaxError(function(event, request) {
		if (request.status == 400) {
			return;
		}
		$("#error_dialog").errorDialog("open", request.statusText);
		$("#todo_details").hide();
		$("#todo_list").show();
		if (request.status == 404) {
			$("#todo_list").todolist("reload");
		}
	});
	
	$(document).ajaxStart(function() {
		$.blockUI({message: null});
	});
	
	$(document).ajaxStop(function() {
		$.unblockUI();
	});
	
	$("#error_dialog").errorDialog();
	
	$("#menu_bar").menubar({
		onShowEventsClicked: function(){
			$("#event_list").eventList("reload");
			$("#event_details").hide();
			$("#event_list").show();
		},
		onCreateEventClicked: function(){
			$("#create_dialog").createDialog("open");
		}
	});
	
	$("#event_details").eventDetails();
	
	$("#event_list").eventList({
		onEventClicked: showEventDetails,
		onDeleteEventClicked: function(event, single_event) {
			$("#delete_dialog").deleteDialog("open", single_event);
		},
		onEditEventClicked: function(event, single_event) {
			$("#edit_dialog").editDialog("open", single_event);
		}
	});
	
	$("#delete_dialog").deleteDialog({
		onEventDeleted: function(){
			$("#event_list").eventList("reload");
		}
	});
	
	$("#edit_dialog").editDialog({
		onEventUpdated: function(){
			$("#event_list").eventList("reload");
		}
	});
	
	$("#create_dialog").createDialog({
		onEventCreated: function(){
			$("#event_list").eventList("reload");
		}
	});
	
	function showEventDetails(event, eventUri) {
		$("#event_list").hide();
		$("#event_details").show();
		$("#event_details").eventDetails("load", eventUri);
	}	
});