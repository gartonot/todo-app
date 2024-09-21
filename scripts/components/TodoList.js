import TodoItem from './TodoItem.js';
import todoRepository from '../services/repositories/todo-repository.js';

const TodoList = async () => {
  // Script
  let todoList = await todoRepository.getTodoList();

  // Template
  const todoListNode = document.createElement('div');
  todoListNode.classList.add('todo-list');

  const todoListEmptyNode = document.createElement('div');
  todoListEmptyNode.innerText = 'Спиоск задач пуст';

  if(todoList.length === 0) {
    todoListNode.append(todoListEmptyNode);
  }

  todoList.forEach(todoItem => {
    if(todoItem.title) {
      todoListNode.append(TodoItem(todoItem.title, todoItem.isCompleted));
    }
  });

  return todoListNode;
}

export default TodoList;
