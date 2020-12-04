import React, { createContext } from 'react';

const MainContext = createContext();

export default MainContext;

export function UserProvider(props) {
  const test = 1;

  return (
    <MainContext.Provider {...props} value={{ test }}>
      {props.children}
    </MainContext.Provider>
  );
}
