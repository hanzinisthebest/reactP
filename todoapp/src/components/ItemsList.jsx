import React, { useContext, useEffect, useState } from "react";
import Item from "./Item";
import ItemContext from "../store/ItemContext";
const ItemsList = () => {
  const { items,sortType,deleteHandler,itemsList } = useContext(ItemContext);
  return (
    <>
      <ul>
        {itemsList.map((item,i) =>  <Item key={i} id={item.id} title={item.title} type={item.type} delete={deleteHandler} />
        )}
      </ul>
    </>
  );
};

export default ItemsList;
