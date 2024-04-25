import { ITodo } from '../../types/ITodo';

export const fetchTodosAction = (todos: ITodo[]) => ({
  'type': 'FETCH_TODOS',
  'payload': todos,
});

export const toggleTodoAction = (id: number) => ({
  'type': 'TOGGLE_TODO',
  'payload': id,
});

export const deleteTodoAction = (id: number) => ({
  'type': 'DELETE_TODO',
  'payload': id,
});

export const restoreTodoAction = (id: number) => ({
  'type': 'RESTORE_TODO',
  'payload': id,
});

export const resetTodosAction = () => ({
  'type': 'RESET_TODOS',
});
