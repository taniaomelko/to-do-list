import { ITodo } from '../../types/ITodo';

const initialState: TodoListState = {
  allTodos: [],
  hasAlreadyFetched: false,
}

interface TodoListState {
  allTodos: ITodo[];
  hasAlreadyFetched: boolean;
}

type TodoListAction =
  | { type: 'FETCH_TODOS', payload: ITodo[] }
  | { type: 'TOGGLE_TODO', payload: number }
  | { type: 'DELETE_TODO', payload: number }
  | { type: 'RESTORE_TODO', payload: number }
  | { type: 'RESET_TODOS', payload: ITodo[] }

export const TodoListReducer = (state: TodoListState = initialState, action: TodoListAction) => {
  switch (action.type) {
    case 'FETCH_TODOS': {
      if (state.hasAlreadyFetched) {
        return state;
      }

      const updatedTodos = action.payload.map((todo: ITodo) => ({
        ...todo,
        deleted: false,
      }));

      return {
        ...state,
        allTodos: updatedTodos,
        hasAlreadyFetched: true,
      }
    }

    case 'TOGGLE_TODO': {
      const updatedTodos = state.allTodos.map((todo: ITodo) => {
        if (todo.id === action.payload) {
          return { ...todo, 'completed': !todo.completed }
        }
        return todo
      });

      return {
        ...state,
        allTodos: updatedTodos,
      }
    }

    case 'DELETE_TODO':
    case 'RESTORE_TODO': {
      const updatedTodos = state.allTodos.map((todo: ITodo) => {
        if (todo.id === action.payload) {
          return { ...todo, 'deleted': !todo.deleted };
        }
        return todo;
      });

      return {
        ...state,
        allTodos: updatedTodos,
      };
    }

    case 'RESET_TODOS': {
      const updatedTodos = state.allTodos.map((todo: ITodo) => ({
        ...todo,
        deleted: false
      }));

      return {
        ...state,
        allTodos: updatedTodos,
      }
    }

    default: {
      return state
    }
  }
}
