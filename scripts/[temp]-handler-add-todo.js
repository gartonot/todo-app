import rerenderTodoList from './helpers/rerender-todo-list.js';
import todoRepository from './services/repositories/todo-repository.js';

const handlerAddTodo = () => {
    const buttonTodoAdd = document.getElementById('buttonTodoAdd');
    const inputFieldTodo = document.getElementById('todoTitleText');

    buttonTodoAdd.addEventListener('click', async () => {
        if(inputFieldTodo.value.length > 0) {
            const data = {
                title: inputFieldTodo.value,
                isCompleted: false,
            }

            await todoRepository.createTodoItem(data);
            inputFieldTodo.value = '';
            rerenderTodoList();
        }
    })
}

export default handlerAddTodo;
