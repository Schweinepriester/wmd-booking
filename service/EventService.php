<?php
	
	require "Config.php";
	
	class EventService {
		const ERROR = "ERROR";
		const NOT_FOUND = "NOT_FOUND";
		const INVALID_INPUT = "INVALID_INPUT";
		const OK = "OK";
		const VERSION_OUTDATED = "VERSION_OURDATED";
		
		public function createEvent($event){
			if ($event->title == ''){
				$result = new CreateEventResult();
				$result->status_code = self::INVALID_INPUT;
				$result->validation_message["title"] = "Fehler, Titel ist eine Pflichtangabe!";
				
				return $result;
			}
			
			@$link = new mysqli($GLOBALS["db_host"], $GLOBALS["db_user"], $GLOBALS["db_pw"], $GLOBALS["db_table"]);
			
			if ($link->connect_error) {
				return self::ERROR;
			}
			
			$succeeded = $link->set_charset("utf8");
			if ($succeeded == FALSE){
				$link->close();
				return self::ERROR;
			}
			
			$insert_statement = "INSERT INTO event SET ".
								"title = '$event->title', ".
								"date = '$event->date', ".
								"starttime = '$event->starttime', ".
								"endtime = '$event->endtime', ".
								"author = '$event->author', ".
								"notes = '$event->notes', ".
								"version = 1" ;
			
			$link->query($insert_statement);
			$id = $link->insert_id;
			$link->close();
			
			$result = new CreateEventResult();
			$result->status_code = self::OK;
			$result->id = $id;
			
			return $result;
		}
		
		public function readEvent($id){
			@$link = new mysqli($GLOBALS["db_host"], $GLOBALS["db_user"], $GLOBALS["db_pw"], $GLOBALS["db_table"]);
			
			if ($link->connect_error) {
				return self::ERROR;
			}
			
			$succeeded = $link->set_charset("utf8");
			if ($succeeded == FALSE){
				$link->close();
				return self::ERROR;
			}
			
			$select_statement = "SELECT * ".
								// "as due, author, title, notes, version ".
								"FROM event ".
								"WHERE id = $id ";
			$result_set = $link->query($select_statement);
			
			$event = $result_set->fetch_object("Event");
			
			$link->close();
			if ($event === NULL) {
				return self::NOT_FOUND;
			}
			
			return $event;
		}
		
		public function readEvents() {
			@$link = new mysqli($GLOBALS["db_host"], $GLOBALS["db_user"], $GLOBALS["db_pw"], $GLOBALS["db_table"]);
			
			if ($link->connect_error) {
				return self::ERROR;
			}
			
			$succeeded = $link->set_charset("utf8");
			if ($succeeded == FALSE){
				$link->close();
				return self::ERROR;
			}
			
			$select_statement = "SELECT * ".
								// "due_date <= CURRENT_DATE as due, author, title, notes, version ".
								"FROM event ".
								"ORDER BY id ASC";
			$result_set = $link->query($select_statement);
			
			$events = array();
			$event = $result_set->fetch_object("Event");

			while($event !== NULL) {
				$events[] = $event;
				$event = $result_set->fetch_object("Event");
			}
			$link->close();
			return $events;
		}
	
		public function deleteEvent($id){
			@$link = new mysqli($GLOBALS["db_host"], $GLOBALS["db_user"], $GLOBALS["db_pw"], $GLOBALS["db_table"]); 	// Verbindung Datenbank
			
			if ($link->connect_error) {
				return self::ERROR;
			}
			
			$succeeded = $link->set_charset("utf8");
			if ($succeeded == FALSE){
				$link->close();
				return self::ERROR;
			}
			
			$select_statement = "DELETE ".
								"FROM event ".
								"WHERE id = $id ";
			$result_set = $link->query($select_statement);
			$affected_rows = $link->affected_rows; 
			$link->close();
			
			if ($affected_rows === 0) {
				return self::NOT_FOUND;
			}
		}
		
		public function updateEvent($event){
			@$link = new mysqli($GLOBALS["db_host"], $GLOBALS["db_user"], $GLOBALS["db_pw"], $GLOBALS["db_table"]);		
			$link->set_charset("utf8");
			
			$update_statement = "UPDATE event SET ".
								"title = '$event->title', ".
								"date = '$event->date', ".
								"starttime = '$event->starttime', ".
								"endtime = '$event->endtime', ".
								"author = '$event->author', ".
								"notes = '$event->notes', ".
								"version = version + 1 ".
								"WHERE id = $event->id AND version = $event->version";
								
			
			$link->query($update_statement);
			$affected_rows = $link->affected_rows; 
		
			if ($affected_rows == 0) {
				$select_statement = "SELECT COUNT(*)".
									"FROM event ".
									"WHERE id = $event->id";
				$result_set = $link->query($select_statement);
				$row = $result_set->fetch_row();
				$count = $row[0];
				$link->close();
				if ($count == 0){
					return self::NOT_FOUND;
				}
				return self::VERSION_OUTDATED;
			}
			else {
				$link->close();
				}
		}
		
		public function calcDuration($starttime, $endtime){
			$stime = new DateTime($starttime);
			$etime = new DateTime($endtime);
			$duration = $stime->diff($etime);
			return $duration->format('%H:%I:%S');
		}
	}
?>