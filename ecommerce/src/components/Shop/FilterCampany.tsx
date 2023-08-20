import { FormControl, FormLabel, Select } from '@chakra-ui/react';
import React,{useRef,useState} from 'react';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { setCompanyFilter } from '../../Store/productSlice';
interface Props {
  
}

const FilterCampany: React.FC<Props> = () => {
  const dispatch =useAppDispatch();
  const selectedValueRef = useRef<string>("all");
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;
    selectedValueRef.current = newValue;
    dispatch(setCompanyFilter(selectedValueRef.current));
  };
  return (
    <FormControl>
     <FormLabel as={'h5'}>company</FormLabel>
     <Select onChange={handleSelectChange}>
      <option value="all">all</option>
      <option value="marcos">marcos</option>
      <option value="liddy">liddy</option>
      <option value="ikea">ikea</option>
      <option value="caressa">caressa</option>
     </Select>
    </FormControl>
  );
};

export default FilterCampany;