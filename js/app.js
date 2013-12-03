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
	
	$("#event_details").eventDetails();
	
	$("#event_list").eventlist({
		onEventClicked: showTodoDetails,
		onDeleteEventClicked: function(event, single_event) {
			$("#delete_dialog").deleteDialog("open", single_event);
		},
		onEditEventClicked: function(event, single_event) {
			$("#edit_dialog").editDialog("open", single_event);
		}
	});
	
	function showTodoDetails(event, eventUri) {
		$("#event_list").hide();
		$("#event_details").show();
		$("#event_details").eventDetails("load", eventUri);
	}	
});
