import { Box, Select } from '@chakra-ui/react'
import React, { useContext, useEffect } from 'react'
import ItemContext from "../store/ItemContext";
function Sort() {
  const{sortType,setSortType} = useContext(ItemContext);
  const sortHandler = (e)=>{
    setSortType(e.target.value);
  }

  return (
  <Box bg={'gray.300'} ml={300}>
   <Select placeholder='' onChange={sortHandler} >
  <option value='All'>All</option>
  <option value='Incomplete'>Incomplete</option>
  <option value='Completed'>Completed</option>
  </Select>
  </Box>
  )
}

export default Sort

