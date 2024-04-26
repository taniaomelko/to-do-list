import React from 'react';
import './App.scss';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { Root } from './components/Root/Root';
import { Home } from './components/Home/Home';
import { Todos } from './components/Todos/Todos';
import { Trash } from './components/Trash/Trash';
import { EViewMode } from './types/EViewMode';

export const App: React.FC = () => {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route path="/" element={<Home />} />
      <Route path={EViewMode.All} element={<Todos />} />
      <Route path={EViewMode.Deleted} element={<Trash />} />
    </Route>
    ), {
      basename: process.env.PUBLIC_URL
    }
  );

  return (
    <RouterProvider router={router} />
  );
}
