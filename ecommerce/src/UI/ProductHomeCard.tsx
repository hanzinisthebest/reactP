import { Box, HStack, Heading, Image, Text, VStack, propNames, useBreakpointValue, useMediaQuery } from '@chakra-ui/react';
import {AiOutlineSearch} from 'react-icons/ai'
import React from 'react';
import { SearchIcon } from '@chakra-ui/icons';
import { Link } from "react-router-dom";
import classes from './ProductHomeCard.module.css'
interface Props {
  img:string,
  name:string,
  price:string,
  key:string
}

const ProductHomeCard: React.FC<Props> = ({img,name,price}) => {
  const notToShow = useBreakpointValue({ base: true, md: false });
  const [isMobile] = useMediaQuery("(max-width: 768px)")
  return (
  <VStack boxSizing={'border-box'} margin={0} padding={0} display={'block'} >
    <Box className={classes.container}>
      <Image src={img} height={'225px'} width={'100%'} display={'block'} fontSize={notToShow ? '.875rem':'1rem'} objectFit={'cover'} transition={'all 0.3s linear'} 
      borderRadius={'0.25rem'}  boxSizing={'border-box'} margin={0} padding={0} className={classes.image}/>
        

      <Box 
       as={Link}
       to={'/products/:`${key}`'}
       className={classes.overlay}
       >
        <SearchIcon  color={'#fff'} fontSize={'1.25rem'}/>
      </Box>
    </Box>
  <HStack
      marginTop={'1rem'}
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      fontSize={isMobile ? '.875rem':'1rem'}
      >
      <Heading as="h5" fontSize={isMobile ? '.875rem':'1rem'} lineHeight={'1.25rem'} marginBottom={'0px'} fontWeight={400}  noOfLines={1}>
        {name}
      </Heading>
      <Text color={'#ab7a5f'}  fontSize={'1rem'}  letterSpacing={'0.1rem'} marginBottom={'0px'} fontWeight={400}>{price}</Text>    
  </HStack>
  </VStack>
  );
};

export default ProductHomeCard;