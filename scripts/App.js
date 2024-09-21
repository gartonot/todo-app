import TodoList from './components/TodoList.js';
import TodoTitle from './components/TodoTitle.js';

const App = async () => {
  const appNode = document.createElement('div');
  appNode.classList.add('app-content');

  appNode.append(TodoTitle());
  appNode.append(await TodoList());

  return appNode;
}

export default App;
