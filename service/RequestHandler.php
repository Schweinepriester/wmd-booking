<?php
	require "Event.php";
	require "EventService.php";
	require "GetEventCommand.php";
	require "GetEventsCommand.php";
	// require "CreateTodoCommand.php";
	// require "CreateTodoResult.php";
	// require "DeleteTodoCommand.php";
	// require "UpdateTodoCommand.php";
	
	class RequestHandler {
		public function handleRequest() {
			$request = $_REQUEST; // Variable "$request"
			if ($_SERVER["REQUEST_METHOD"] == "PUT"){
				parse_str(file_get_contents("php://input"), $body_parameters);
				$request = $request + $body_parameters;
				if ($request["title"] == "") {
				  header("HTTP/1.1 400");
				  $validation_messages = array();
				  $validation_messages["title"] = "Der Titel ist eine Pflichtangabe. Bitte geben Sie einen Titel an.";
				  echo json_encode($validation_messages);
				  return;
				}	
			}
			
			$request_headers = apache_request_headers();
			$class_name = $request["command"];
			$command = new $class_name;
			$result = $command->execute($request, $request_headers);

			if ($result != NULL){
				echo(json_encode($result));		// Ausgabe in JSON
			}
			
		}
	}
	
	$request_handler = new RequestHandler();
	$request_handler->handleRequest();
?>