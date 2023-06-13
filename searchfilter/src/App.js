import React, { useState } from "react";

import "./index.css";
import Search from "./Search";

function App() {

  const list = [
    "Banana",
    "Apple",
    "Orange",
    "Mango",
    "Pineapple",
    "Watermelon"
  ];

  const [filterList, setFilterList] = useState(list);

  const handleSearch = (event) => {

    if (event.target.value === "") {
      setFilterList(list);
      return;
    }
    const filteredValues = list.filter(
      (item) =>
        item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
    );
    setFilterList(filteredValues);
  };
  return (
    <div className="app">
      <Search list={list}/>
    </div>
  );
}

export default App;