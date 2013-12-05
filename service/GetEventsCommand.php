<?php
	
	class GetEventsCommand {
		
		public function execute() {
			$event_service = new EventService();
			$events = $event_service->readEvents();
			
			if($events == EventService::ERROR){
				header("HTTP/1.1 500");
				return;
			}
			
			foreach ($events as $event){
				$event->uri = $GLOBALS["service_uri"].$event->id;
				$event->duration = $event_service->calcDuration($event->starttime,$event->endtime);
				unset($event->id);
			}
			
			return $events;
		}
	}
?>