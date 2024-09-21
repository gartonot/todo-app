const TodoTitle = () => {
  const todoTitleNode = document.createElement('div');
  todoTitleNode.classList.add('todo-title');
  todoTitleNode.innerText = 'Список задач';

  return todoTitleNode;
}

export default TodoTitle;
