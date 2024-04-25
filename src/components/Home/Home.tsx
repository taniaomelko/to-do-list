import React from 'react';
import './Home.scss';
import { Title } from '../Title/Title';

export const Home: React.FC = () => {
  return (
    <section className="home">
      <div className="container">
        <Title>
          Home
        </Title>
      </div>
    </section>
  );
}
