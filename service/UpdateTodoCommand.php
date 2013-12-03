<?php
	
	class UpdateTodoCommand {
		public function execute($request, $request_headers) {
			$todo = new Todo();
			
			if(isset($request["title"]) == TRUE){
				$todo->title = $request["title"];
			}
			$todo->id = $request["id"];
			$todo->due_date = $request["due_date"];
			$todo->notes = $request["notes"];
			$todo->version = $request_headers["If-Match"];
		 
			$todo_service = new TodoService();
			$result = $todo_service->updateTodo($todo);
			
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