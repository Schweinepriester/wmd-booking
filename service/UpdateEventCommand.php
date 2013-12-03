<?php
	
	class UpdateEventCommand {
		public function execute($request, $request_headers) {
			$event = new Todo();
			
			if(isset($request["title"]) == TRUE){
				$event->title = $request["title"];
			}
			$event->id = $request["id"];
			$event->date = $request["date"];
			$event->starttime = $request["starttime"];
			$event->endtime = $request["endtime"];
			$event->author = $request["author"];
			$event->notes = $request["notes"];
			$event->version = $request_headers["If-Match"];
		 
			$event_service = new EventService();
			$result = $event_service->updateEvent($event);
			
			if($result == TodoService::VERSION_OUTDATED){
				header("HTTP/1.1 412");
				return;
			}
			if($result == TodoService::NOT_FOUND){
				header("HTTP/1.1 404");
				return;
			}
		}
	}
?>