import React from 'react';
import './Todos.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { Reset } from '../Reset/Reset';
import { TodoList } from '../TodoList/TodoList';
import { EViewMode } from '../../types/EViewMode';
import { Title } from '../Title/Title';

export const Todos: React.FC = () => {
  const allTodos = useSelector((state: RootState) => state.todos.allTodos);

  return (
    <section className="todos">
      <div className="container">
        <Title>
          All to-do
        </Title>

        {!!allTodos.length && <Reset />}
        <TodoList viewMode={EViewMode.All} />
      </div>
    </section>
  );
}
