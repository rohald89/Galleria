import React, { useState } from 'react';

export const Context = React.createContext();

export const Provider = (props) => {
  const [painting, setPainting] = useState(0);
  
  return (
    <Context.Provider value={{ 
      painting,
      setPainting
    }}>
      { props.children }
    </Context.Provider>
  );
};