<?php
	
	class GetEventCommand {

		public function execute($request) {

			if(isset($request["id"]) == FALSE){
				header("HTTP/1.1 400");
				return;
			}
			
			$id = $request["id"];
			$event_service = new EventService();
			$event = $event_service->readEvent($id);
			
			if($event == EventService::NOT_FOUND){
				header("HTTP/1.1 404");
				return;
			}
			unset($event->id);
			$event->duration = $event_service->calcDuration($event->starttime, $event->endtime);

			header("Etag: $event->version");
			unset($event->version);
			return $event;
		}
	}
?>