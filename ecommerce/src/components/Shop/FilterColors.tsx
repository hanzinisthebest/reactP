import { Box, Button, FormControl, HStack, Heading, Stack } from '@chakra-ui/react';
import React from 'react';
import classes from './Colors.module.css'
import { useAppDispatch } from '../../hooks/redux-hooks';
import { setColorsFilter } from '../../Store/productSlice';
import { log } from 'console';
interface Props {
  
}

const FilterColors: React.FC<Props> = () => {
  const dispatch =useAppDispatch();
  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if(event.currentTarget.textContent === "All"){
      console.log("All");
      dispatch(setColorsFilter("All"));
      return;
    }
    let newValue:string|undefined;
    newValue =  event.currentTarget.dataset.color;
    console.log(newValue);
    dispatch(setColorsFilter(newValue));
};
  return (
    <FormControl>
      <Heading as={'h5'} fontSize={'1rem'}>colors</Heading>
      <HStack display={'flex'} alignItems={'center'} lineHeight={1.5}>
      <Box as={'button'} className={classes.all} onClick={handleButtonClick}>All</Box>
      <Box as={'button'} className={classes.color} background={'rgb(255, 0, 0)'} data-color={"#ff0000"} onClick={handleButtonClick}/>
      <Box as={'button'} className={classes.color} background={'rgb(0, 255, 0)'} data-color={"#00ff00"} onClick={handleButtonClick}/>
      <Box as={'button'} className={classes.color} background={'rgb(0, 0, 255)'} data-color={"#0000ff"} onClick={handleButtonClick}/>
      <Box as={'button'} className={classes.color} background={'rgb(0, 0, 0)'} data-color={"#000"} onClick={handleButtonClick}/>
      <Box as={'button'} className={classes.color} background={'rgb(255, 185, 0)'}data-color={"#ffb900"} onClick={handleButtonClick}/>
      </HStack>
    </FormControl>
  );
};

export default FilterColors;