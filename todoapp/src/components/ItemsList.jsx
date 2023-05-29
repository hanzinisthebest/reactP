import React, { useContext, useEffect } from "react";
import Item from "./Item";
import ItemContext from "../store/ItemContext";
const ItemsList = () => {
  const { items,sortType } = useContext(ItemContext);

  let itemsList;
  if(sortType === 'All'){
    itemsList = items.map(item=>item);
  }
  else if(sortType==='Incomplete'){
    itemsList =items.filter(item=>item.type===sortType);
  }
  else{
    itemsList =items.filter(item=>item.type===sortType);
  }
  return (
    <>
      <ul>
        {itemsList.map((item) => {
          return <Item key={item.id} title={item.title} type={item.type} />;
        })}
      </ul>
    </>
  );
};

export default ItemsList;
