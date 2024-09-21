import TodoList from './components/TodoList.js';
import TodoTitle from './components/TodoTitle.js';

import handlerAddTodo from './[temp]-handler-add-todo.js';
import rerenderTodoList from './helpers/rerender-todo-list.js';

const App = async () => {
  const appNode = document.createElement('div');
  appNode.classList.add('app-content');

  // Обработчик кнопки добавить задачу
  handlerAddTodo();

  appNode.append(TodoTitle());
  appNode.append(TodoList());

  return appNode;
}

export default App;
