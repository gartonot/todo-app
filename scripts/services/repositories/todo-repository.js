import Http from '../classes/Http.js';

const http = new Http();

const todoRepository = {
  async getTodoList() {
    try {
      const response = await http.get('/todos');
      return response.length > 0 ? response : [];
    } catch (error) {
      console.error('Ошибка получения списка задач: ', error);
    }
  },
}

export default todoRepository;
