import { combineReducers } from 'redux';
import { TodoListReducer } from './TodoList';

export const RootReducer = combineReducers({
  'todos': TodoListReducer,
})

export type RootState = ReturnType<typeof RootReducer>
