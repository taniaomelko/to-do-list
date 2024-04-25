import React, { useMemo } from 'react';
import './Reset.scss';
import { useDispatch, useSelector } from 'react-redux';
import { resetTodosAction } from '../../redux/actions';
import { RootState } from '../../redux/reducers';

export const Reset: React.FC = () => {
  const dispatch = useDispatch();

  const allTodos = useSelector((state: RootState) => state.todos.allTodos);
  const deletedTodos = useMemo(() => allTodos.filter(todo => todo.deleted), [allTodos]);

  const handleReset = () => {
    dispatch(resetTodosAction());
  }

  return (
    <div className="reset">
      <div 
        className={`reset__button ${!deletedTodos.length ? 'disabled' : ''}`} 
        onClick={handleReset}
      >
        Reset all
      </div>
    </div>
  );
}
