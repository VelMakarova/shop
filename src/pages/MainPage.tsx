import React from 'react';

interface MainPageProps {
    children: JSX.Element
}

export function MainPage({ children }: MainPageProps) {
  return <div>{children}</div>;
}
