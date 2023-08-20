import { Box, Button, FormControl, Heading } from '@chakra-ui/react';
import React from 'react';
import classes from './Category.module.css'
import { useAppDispatch } from '../../hooks/redux-hooks';
import { setCategoryFilter } from '../../Store/productSlice';
interface Props {
  
}

const FilterCategory: React.FC<Props> = () => {
  const dispatch =useAppDispatch();
  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    let newValue:string|null;
    newValue =  event.currentTarget.textContent;
    console.log(newValue);
    dispatch(setCategoryFilter(newValue));
};

  return (
    <FormControl marginBottom={'1.25rem'}>
      <Heading as={'h5'} marginBottom={'0.5rem'} fontSize={'1rem'} lineHeight={1.25} textTransform={'capitalize'} >Category</Heading>
      <Box>
        <Button onClick={handleButtonClick} display={'block'}  className={classes.category}>All</Button>
        <Button onClick={handleButtonClick} display={'block'} className={classes.category}>Office</Button>
        <Button onClick={handleButtonClick} display={'block'}  className={classes.category}>Living Room</Button>
        <Button onClick={handleButtonClick} display={'block'}  className={classes.category}>Kitchen</Button>
        <Button onClick={handleButtonClick} display={'block'}  className={classes.category}>Bedroom</Button>
        <Button onClick={handleButtonClick} display={'block'} className={classes.category}>Dining</Button>
        <Button onClick={handleButtonClick} display={'block'}  className={classes.category}>Kids</Button>
      </Box>
    </FormControl>
  );
};

export default FilterCategory;