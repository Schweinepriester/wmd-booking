<?php
	
	class EventService {
		const ERROR = "ERROR";
		const NOT_FOUND = "NOT_FOUND";
		const INVALID_INPUT = "INVALID_INPUT";
		const OK = "OK";
		const VERSION_OUTDATED = "VERSION_OURDATED";
		
		public function createTodo($todo){
			if ($todo->title == ''){
				$result = new CreateTodoResult();
				$result->status_code = self::INVALID_INPUT;
				$result->validation_message["title"] = "Fehler, Titel ist Pflicht!!!";
				
				return $result;
			}
			
			@$link = new mysqli("localhost", "root", "" ,"todolist"); 	// Verbindung Datenbank
			
			if ($link->connect_error) {
				return self::ERROR;
			}
			
			$succeeded = $link->set_charset("utf8");
			if ($succeeded == FALSE){
				$link->close();
				return self::ERROR;
			}
			
			$insert_statement = "INSERT INTO todo SET ".
								"title = '$todo->title', ".
								"due_date = '$todo->due_date', ".
								"created_date = CURRENT_DATE, ".
								"notes = '$todo->notes', ".
								"version = 1" ;
			
			$link->query($insert_statement);
			$id = $link->insert_id;
			$link->close();
			
			$result = new CreateTodoResult();
			$result->status_code = self::OK;
			$result->id = $id;
			
			return $result;
		}
		
		public function readEvent($id){
			@$link = new mysqli("localhost", "root", "wacken" ,"wmd_booking");
			
			if ($link->connect_error) {
				return self::ERROR;
			}
			
			$succeeded = $link->set_charset("utf8");
			if ($succeeded == FALSE){
				$link->close();
				return self::ERROR;
			}
			
			$select_statement = "SELECT id, title, date, starttime, endtime, author, notes ".
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
			@$link = new mysqli("localhost", "root", "wacken" ,"wmd_booking"); 	// Verbindung Datenbank
			
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
	
		public function deleteTodo($id){
			@$link = new mysqli("localhost", "root", "" ,"todolist"); 	// Verbindung Datenbank
			
			if ($link->connect_error) {
				return self::ERROR;
			}
			
			$succeeded = $link->set_charset("utf8");
			if ($succeeded == FALSE){
				$link->close();
				return self::ERROR;
			}
			
			$select_statement = "DELETE ".
								"FROM todo ".
								"WHERE id = $id ";
			$result_set = $link->query($select_statement);
			$affected_rows = $link->affected_rows; 
			$link->close();
			
			if ($affected_rows === 0) {
				return self::NOT_FOUND;
			}
		}
		
		public function updateTodo($todo){
			@$link = new mysqli("localhost", "root", "" ,"todolist"); 	// Verbindung Datenbank		
			$link->set_charset("utf8");
			
			$update_statement = "UPDATE todo SET ".
								"title = '$todo->title', ".
								"due_date = '$todo->due_date', ".
								"notes = '$todo->notes', ".
								"version = version + 1 ".
								"WHERE id = $todo->id AND version = $todo->version";
								
			
			$link->query($update_statement);
			$affected_rows = $link->affected_rows; 
		
			if ($affected_rows == 0) {
				$select_statement = "SELECT COUNT(*)".
									"FROM todo ".
									"WHERE id = $todo->id";
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
		
	}
?>