import { Box, Button, HStack, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  img:string,
  name:string,
  price:string,
  description: string
}

const ProductListCard: React.FC<Props> = ({img,name,price,description}) => {
  return (
    <HStack display={'grid'} gridTemplateColumns={'auto 1fr'} columnGap={'2rem'} alignItems={'center'}>
      <Image src={img} display={'block'} width={'300px'} height={'200px'} objectFit={'cover'} borderRadius={'0.25rem'} marginBottom={'1rem'}/>
      <Box>
        <Heading as={'h4'} fontSize={'1.5rem'} marginBottom={'0.5rem'} lineHeight={1}>{name}</Heading>
        <Text color={'#ab7a5f'} fontSize={'1rem'} marginBottom={'0.75rem'} >{price}</Text>
        <Text maxWidth={'45em'} marginBottom={'1rem'} color={'#324d67'}>{description}</Text>
        <Box as={Link} to={'/'} 
        fontSize={'0.5rem'}
         background= {'#ab7a5f'}
         borderColor={'transparent'} 
         boxShadow={'0 1px 3px rgba(0,0,0,.2)'}
         color={'#eaded7'}
         borderRadius={'0.25rem'}
         fontWeight={400}
         display={'inline-block'}
         padding={'0.25rem 0.5rem'}
         textTransform={'uppercase'}
         transition={'all 0.3s linear'}
         cursor={'pointer'}
         letterSpacing={'.1rem'}         
         >Deatiles</Box>    
      </Box>
    </HStack>
  );
};

export default ProductListCard;