import React, { ReactNode } from 'react';
import './Title.scss';

interface TitleProps {
  children: ReactNode;
}

export const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <h1 className="title">
      {children}
    </h1>
  );
}
