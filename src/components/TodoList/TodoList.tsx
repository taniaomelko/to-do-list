import React, { useEffect } from 'react';
import './TodoList.scss';
import fetchData from '../../data/api';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodosAction } from '../../redux/actions';
import { RootState } from '../../redux/reducers';
import { Todo } from '../Todo/Todo';
import { ITodo } from '../../types/ITodo';
import { EViewMode } from '../../types/EViewMode';
import { Loader } from '../Loader/Loader';

interface TodoListProps {
  viewMode: EViewMode
}

export const TodoList: React.FC<TodoListProps> = ({ viewMode }) => {
  const dispatch = useDispatch();
  const allTodos = useSelector((state: RootState) => state.todos.allTodos);
  const hasAlreadyFetched = useSelector((state: RootState) => state.todos.hasAlreadyFetched);

  useEffect(() => {
    const fetchTodos = async (): Promise<void> => {
      const data = await fetchData();
      dispatch(fetchTodosAction(data as ITodo[]));
    }

    fetchTodos();
  }, [dispatch]);

  const filteredTodos = allTodos.filter(todo => {
    switch (viewMode) {
      case EViewMode.All:
        return true;
      case EViewMode.Deleted:
        return todo.deleted;
      default:
        return !todo.deleted;
    }
  });
  
  return (
    <div className="todo-list">
      {hasAlreadyFetched ? (
        <>
          {filteredTodos.map(todo => (
            <Todo viewMode={viewMode} key={todo.id} todoItem={todo} />
          ))}
        </>
      ) : <Loader />}
    </div>
  );
}
