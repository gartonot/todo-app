import App from './scripts/App.js';
import rerenderTodoList from './scripts/helpers/rerender-todo-list.js';

(async () => {
  const appHtml = document.getElementById('app');

  appHtml.append(await App());
  rerenderTodoList();
})();
