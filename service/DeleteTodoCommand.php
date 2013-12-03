<?php
	
	class DeleteTodoCommand {
		public function execute($request) {

			$id = $request["id"];
			$todo_service = new TodoService();
			$result = $todo_service->deleteTodo($id);

			if($result == TodoService::NOT_FOUND){
				header("HTTP/1.1 404");
				return;
			}
		}
	}
?>