import React, { useEffect, useState } from 'react'

function Search(props) {
    const [filterList, setFilterList] = useState(props.list);
    const [isLoading,setIsLoading] = useState(null);
    const [problem,setProblem] = useState(null);



    const handleSearch = (event) => {

        if (event.target.value === "") {
          setFilterList(props.list);
          return;
        }
        const filteredValues = props.list.filter(
          (item) =>
            item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
        );
        setFilterList(filteredValues);
      };

      useEffect(()=>{
        const postList = (filterList)=>{ fetch('https://searchitems-95f97-default-rtdb.firebaseio.com/list.json',{
            method: 'PUT',
            body: JSON.stringify(filterList)
          })
        }
        postList(filterList);
    },[]);

    useEffect(()=>{
        const requsetList = async ()=>{
          try{
          setIsLoading("Loading...")
          const response = await fetch('https://searchitems-95f97-default-rtdb.firebaseio.com/list.json');
          if(!response.ok){
            throw new Error("An error happened, please try again later ");
            }
          setIsLoading(null);
          setProblem(null);
          const responseData = await response.json();
          setFilterList(responseData);
          console.log(responseData);
        }
        catch(error){
          setProblem(error.message);
        }
      }
      requsetList();
    },[]);

  return (
    <div>
         <div>
        Search: <input name="query" type="text" onChange={handleSearch} />
      </div>
      {filterList &&
        filterList.map((item, index) => (
          <div key={index}>{item}</div> //Di9splay each item
        ))}
      
    </div>
  )
}

export default Search
