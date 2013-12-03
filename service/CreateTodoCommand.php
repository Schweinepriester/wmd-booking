<?php
	
	class CreateTodoCommand {
		public function execute($request) {
			$todo = new Todo();
			
			if(isset($request["title"]) == TRUE){
				$todo->title = $request["title"];
			}
			
			$todo->due_date = $request["due_date"];
			$todo->notes = $request["notes"];
		 
			$todo_service = new TodoService();
			$result = $todo_service->createTodo($todo);
			
			if ($result->status_code == TodoService::INVALID_INPUT){
				header("HTTP/1.1 400");
				return $result->validation_message;
			}
			
		 
			header("HTTP/1.1 201");
			header("Location: /service/todos/$result->id");
			
			
		
		}
	}
?>