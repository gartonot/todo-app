const TodoList = () => {
  const todoListNode = document.createElement('div');
  todoListNode.classList.add('todo-list');
  todoListNode.id = 'todoList';

  return todoListNode;
}

export default TodoList;
