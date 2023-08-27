import { Button, VStack } from '@chakra-ui/react';
import React from 'react';
import Search from '../Search';
import FilterCategory from './FilterCategory';
import FilterCampany from './FilterCampany';
import FilterColors from './FilterColors';
import FilterPrice from './FilterPrice';
import ShippingFilter from './ShippingFilter';
import { useAppDispatch } from '../../../hooks/redux-hooks';
import { initFilters } from '../../../Store/productSlice';

interface Props {
  
}

const Filters: React.FC<Props> = () => {
  const dispatch = useAppDispatch();
  const handelClick = ()=>{
dispatch(initFilters())
  }
  return (
    <VStack fontSize={'1rem'}  >
      <Search/>
      <FilterCategory/>
      <FilterCampany/>
      <FilterColors/>
      <FilterPrice/>
      <ShippingFilter/>
      <Button onClick={handelClick}>clear filters</Button>
    </VStack>
  );
};

export default Filters;