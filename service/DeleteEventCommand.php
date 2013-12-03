<?php
	
	class DeleteEventCommand {
		public function execute($request) {

			$id = $request["id"];
			$event_service = new EventService();
			$result = $event_service->deleteEvent($id);

			if($result == EventService::NOT_FOUND){
				header("HTTP/1.1 404");
				return;
			}
		}
	}
?>