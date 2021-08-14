import React, { useState } from 'react';

export const Context = React.createContext();

export const Provider = (props) => {
  const [painting, setPainting] = useState(0);
  const [openModal, setOpenModal] = useState(true);
  const [[page, direction], setPage] = useState([0, 0]);
  
  return (
    <Context.Provider value={{ 
      painting,
      setPainting,
      openModal,
      setOpenModal,
      page,
      direction,
      setPage
    }}>
      { props.children }
    </Context.Provider>
  );
};