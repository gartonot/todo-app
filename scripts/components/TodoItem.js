const TodoItem = (text, isCompleted = false) => {
  const todoItemNode = document.createElement('label');
  todoItemNode.classList.add('todo-item');

  // Origin input type of checkbox
  const inputCheckboxNode = document.createElement('input');
  inputCheckboxNode.classList.add('checkbox-origin');
  inputCheckboxNode.type = 'checkbox';
  inputCheckboxNode.checked = Boolean(isCompleted);

  // Fake input type of checkbox
  const fakeInputCheckboxNode = document.createElement('div');
  fakeInputCheckboxNode.classList.add('checkbox-fake');

  // Text
  const todoItemTextNode = document.createElement('span');
  todoItemTextNode.classList.add('checkbox-text');
  todoItemTextNode.innerText = text || '';

  todoItemNode.append(inputCheckboxNode);
  todoItemNode.append(fakeInputCheckboxNode);
  todoItemNode.append(todoItemTextNode);

  return todoItemNode;
}

export default TodoItem;
