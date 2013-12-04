<?php
	
	class CreateEventCommand {
		public function execute($request) {
			$event = new Event();
			
			if(isset($request["title"]) == TRUE){
				$event->title = $request["title"];
			}
			
			$event->date = $request["date"];
			$event->starttime = $request["starttime"];
			$event->endtime = $request["endtime"];
			$event->author = $request["author"];
			$event->notes = $request["notes"];
		 
			$event_service = new EventService();
			$result = $event_service->createEvent($event);
			
			if ($result->status_code == EventService::INVALID_INPUT){
				header("HTTP/1.1 400");
				return $result->validation_message;
			}
			
		 
			header("HTTP/1.1 201");
			header("Location: /wmd-booking/service/events/$result->id");
			
		}
	}
?>