import React from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';
import { EViewMode } from '../../types/EViewMode';

const VIEW_MODES = [
  { path: '/', label: 'Home' },
  { path: `/${EViewMode.All}`, label: 'All' },
  { path: `/${EViewMode.Deleted}`, label: 'Deleted' },
];

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <nav>
          <ul className="header__list">
            {VIEW_MODES.map((mode) => (
              <li key={mode.label} className="header__item">
                <NavLink to={mode.path}>
                  {mode.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
