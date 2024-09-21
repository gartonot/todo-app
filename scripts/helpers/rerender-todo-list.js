import TodoItem from '../components/TodoItem.js';
import todoRepository from '../services/repositories/todo-repository.js';

const rerenderTodoList = async () => {
  const todoListHtml = document.getElementById('todoList');

  if(todoListHtml) {
    todoListHtml.innerHTML = '';

    let todoList = await todoRepository.getTodoList();
  
    // Template
    const todoListEmptyNode = document.createElement('div');
    todoListEmptyNode.innerText = 'Спиоск задач пуст';
  
    if(todoList.length === 0) {
      todoListHtml.append(todoListEmptyNode);
    }
  
    todoList.forEach(todoItem => {
      if(todoItem.title) {
        todoListHtml.append(TodoItem(todoItem.title, todoItem.isCompleted));
      }
    });
  }
}

export default rerenderTodoList;
