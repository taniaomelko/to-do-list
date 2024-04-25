import React, { useMemo } from 'react';
import './Trash.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { Title } from '../Title/Title';
import { Reset } from '../Reset/Reset';
import { TodoList } from '../TodoList/TodoList';
import { EViewMode } from '../../types/EViewMode';

export const Trash: React.FC = () => {
  const allTodos = useSelector((state: RootState) => state.todos.allTodos);
  const deletedTodos = useMemo(() => allTodos.filter(todo => todo.deleted), [allTodos]);

  return (
    <section className="todos deleted">
      <div className="container">
        <Title>
          Deleted to-do
        </Title>

        {deletedTodos.length ? (
          <>
            <Reset />
            <TodoList viewMode={EViewMode.Deleted} />
          </>
        ) : (
          <div>No deleted to-do</div>
        )}
      </div>
    </section>
  );
}
