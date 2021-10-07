const baseUrl = 'http://127.0.0.1:3000/todos';

export const loadTodos = () => {
  return fetch(baseUrl).then((res) => res.json());
};

export const getTodo = (id) => {
  return fetch(`${baseUrl}/${id}`).then((res) => res.json());
};

export const createTodo = (todo) => {
  return fetch(baseUrl, {
    method: 'POST',
    header: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title: todo.title, completed: todo.completed }),
  }).then((res) => res.json());
};

export const updateTodo = (todo) => {
  return fetch(`${baseUrl}/${todo.id}`, {
    method: 'PUT',
    header: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: todo.id,
      title: todo.title,
      completed: todo.completed,
    }),
  }).then((res) => res.json());
};

export const deleteTodos = (id) => {
  return fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
  }).then((res) => res.json());
};
