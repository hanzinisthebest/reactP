import React, { createContext, useState } from "react";

const ItemContext = createContext();

export function ItemProvider({ children }) {
  const [items, setItems] = useState([]);
  const [sortType,setSortType] = useState('All');

  return (
    <ItemContext.Provider value={{items, setItems,sortType,setSortType}}>
      {children}
    </ItemContext.Provider>
  );
}

export default ItemContext;
