import React, { useState } from 'react';

export const Context = React.createContext();

export const Provider = (props) => {
  const [painting, setPainting] = useState(0);
  const [openModal, setOpenModal] = useState(true);
  
  return (
    <Context.Provider value={{ 
      painting,
      setPainting,
      openModal,
      setOpenModal
    }}>
      { props.children }
    </Context.Provider>
  );
};