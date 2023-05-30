import React, { createContext, useState } from "react";

const ItemContext = createContext();

export function ItemProvider({ children }) {
  const [items, setItems] = useState([]);
  const [sortType,setSortType] = useState('All');
  const [itemsList,setItemsList]=useState([]);

  const handlerSort = ()=>{
    let itemsL ;
    if(sortType === 'All'){
      itemsL = items.map((item)=>item);
      setItemsList(itemsL);
    }
    else if(sortType==='Incomplete'){
      itemsL = items.filter((item)=>item.type===sortType)
      setItemsList(itemsL);
    }
    else{
      itemsL = items.filter(item=>item.type===sortType);
       setItemsList(itemsL);
    }
  }
  const deleteHandler = (itemId)=>{
    const newItemsL = items.filter(item=>item.id!==itemId);
    setItems(newItemsL);
    handlerSort();
  }
  return (
    <ItemContext.Provider value={{items, setItems,sortType,setSortType,handlerSort,deleteHandler,itemsList,setItemsList}}>
      {children}
    </ItemContext.Provider>
  );
}

export default ItemContext;
