import React, { createContext, useEffect, useState } from "react";

const AppContext = createContext();
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

export function AppProvider({ children }) {
   const [cocktiels,setCocktiels] = useState([]);
   const [isLoading,setIsLoading] = useState(false);
   const [search,setSearch] = useState('');
   const [onPage,setOnPage] = useState(false);
   const [id,setId] = useState(null);
   const [oneCocktile,setOneCocktile] = useState([]);
   const [email,setEmail] = useState('');
   const fetchDrinks = async ()=>{
    try{
      setIsLoading(true);
      const response = await fetch(`${url}${search}`);
      const data = await response.json();
      const {drinks} = data;

      if(drinks){
        const newCocktiles = drinks.map((item)=>{
          const {idDrink,strDrink,strGlass,strAlcoholic,strDrinkThumb}=item;
          return {id:idDrink,name:strDrink,glass:strGlass,info:strAlcoholic,pic:strDrinkThumb};
        });
        setCocktiels(newCocktiles);
      }
      else{
        setCocktiels([]);
      }
      setIsLoading(false);
    }
    catch(error){
      console.log(error);
      setIsLoading(false);
    }
   }

   const fetchById = async ()=>{
    try {
      setIsLoading(true);
      const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="+`${id}`);
      const data = await response.json();
      console.log(data);
      const {drinks} = data;
      if(drinks){
        const newCocktile = drinks.map((item)=>{
          const {idDrink,strDrink,strGlass,strCategory,strAlcoholic,strDrinkThumb,strInstructions,strIngredient1}=item;
          return {id:idDrink,name:strDrink,glass:strGlass,category:strCategory,info:strAlcoholic,pic:strDrinkThumb,instructions:strInstructions,ingredient:strIngredient1};
        });
        setOneCocktile(newCocktile[0]);

      }
      else{
        setOneCocktile([]);
      }
      console.log(oneCocktile);
      setIsLoading(false);

    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
   }


   useEffect(()=>{
    fetchDrinks();
   },[search]);

   useEffect(()=>{
    if(onPage){
    fetchById();
    }
    
  },[onPage,id]);
  return (
    <AppContext.Provider value={{email,setEmail,cocktiels,setCocktiels,isLoading,setIsLoading,setSearch,search,id,setId,setOnPage,oneCocktile,setOneCocktile}}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;