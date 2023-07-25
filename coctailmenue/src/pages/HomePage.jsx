import React, { useContext } from 'react'
import Search from '../components/Search'
import ListItems from '../components/ListItems'
import Loading from '../components/Loading'
import AppContext from '../store/AppContext'

function HomePage() {

  return (
   <>
   <Search/>
   <div style={{width:'90vw',maxWidth: '1120px',margin: '0 auto',padding:'5rem 2rem'}}>
   <ListItems/>
   </div>
   </>
  )
}

export default HomePage

// export async function loader(){
//   setIsLoading(true);
//   const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
//   if(!response.ok){
//       throw new Error("An error happened, please try again later ");
//   }
//   setIsLoading(null);
//   setItems(await response.json());
// }
