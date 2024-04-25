import React, { useState, useEffect } from 'react';
import './Todo.scss';
import { useDispatch } from 'react-redux';
import { ITodo } from '../../types/ITodo';
import { CrossIcon, CheckIcon } from '../icons';
import { toggleTodoAction, deleteTodoAction, restoreTodoAction } from '../../redux/actions';
import { EViewMode } from '../../types/EViewMode';

interface TodoProps {
  todoItem: ITodo;
  viewMode: EViewMode;
}

export const Todo: React.FC<TodoProps> = ({ todoItem, viewMode }) => {
  const { id, todo, completed, deleted } = todoItem;
  const [isCompleted, setIsCompleted] = useState(completed);
  const [isDeleted, setIsDeleted] = useState(deleted);

  const dispatch = useDispatch();

  // Sync local state with redux state
  useEffect(() => {
    setIsDeleted(deleted);
  }, [deleted]);

  const handleClick = (): void => {
    setIsCompleted(!isCompleted);
    dispatch(toggleTodoAction(id));
  }

  const handleDelete = (): void => {
    setIsDeleted(!isDeleted);
    dispatch(deleteTodoAction(id));
  }

  const handleRestore = (): void => {
    setIsDeleted(!isDeleted);
    dispatch(restoreTodoAction(id));
  }

  return (
    <div className={`todo ${isDeleted ? 'deleted' : ''}`}>
      <div 
        className={`todo__wrap ${isCompleted ? 'completed' : ''}`}
        onClick={handleClick}
      >
        <div className="todo__title">
          {todo}
        </div>
  
        <div className="todo__icon">
          {isCompleted ? <CheckIcon /> : <CrossIcon />}
        </div>
      </div>

      {viewMode === 'all' && (
        <div 
          className="todo__button" 
          onClick={handleDelete}
        >
          {isDeleted ? 'Deleted' : 'Delete'}
        </div>
      )}

      {viewMode === 'deleted' && (
        <div 
          className="todo__button" 
          onClick={handleRestore}
        >
          Restore
        </div>
      )}
    </div>
  )
}
