import { VStack } from '@chakra-ui/react';
import React from 'react';
import Search from './Search';
import FilterCategory from './FilterCategory';
import FilterCampany from './FilterCampany';
import FilterColors from './FilterColors';
import FilterPrice from './FilterPrice';

interface Props {
  
}

const Filters: React.FC<Props> = () => {
  return (
    <VStack fontSize={'1rem'}  >
      <Search/>
      <FilterCategory/>
      <FilterCampany/>
      <FilterColors/>
      <FilterPrice/>
    </VStack>
  );
};

export default Filters;