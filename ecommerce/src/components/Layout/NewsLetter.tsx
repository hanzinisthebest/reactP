import { Box, Button, FormControl, FormLabel, HStack, Heading, Input, Text, VStack } from '@chakra-ui/react';
import React from 'react';

interface Props {
  
}

const NewsLetter: React.FC<Props> = () => {
  return (
    <div>
      <VStack padding={'5rem 0px'} display={'block'} fontSize={'1rem'} margin = {0}>
        <Box  maxWidth={'1170px'} >
          <Heading as={'h3'} fontSize={'2rem'} >Join our newsletter and get 20% off</Heading>
        <HStack display={'grid'} gridTemplateColumns={'1fr 1fr'} 
        alignItems={'center'} marginTop={'2rem'} 
        gap={'8rem'}>
          <Text maxWidth={'45em'} lineHeight={2} color={'#617d98'} marginBottom={'0px'} >Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Veritatis velit maiores, eaque voluptatem aliquam similique sapiente 
            ipsum eveniet nisi adipisci minima molestiae dolor recusandae fugit error dignissimos delectus consectetur esse?
          </Text>
          <FormControl width={'90vw'} display={'grid'} 
          gridTemplateColumns={'1fr auto'} maxWidth={'500px'} >
            <Input type='email' placeholder='Email' borderRight={'none'} color={'#324d67'}
             borderTopLeftRadius={'.25rem'} borderBottomLeftRadius={'.25rem'} fontSize={'1rem'}
             padding={'0.5rem 1rem '}
             border={'2px solid #222'}/>
             <Button borderBottomRightRadius={'.25rem'} borderTopRightRadius={'.25rem'}
            type='submit' letterSpacing={'0.1rem'}
            textTransform={'capitalize'} cursor={'pointer'} background={'#ab7a5f'} 
            color={"#222"} transition={'all 0.3s linear'}>Suscribe</Button>
          </FormControl>
        </HStack>
        </Box>
      </VStack>
    </div>
  );
};

export default NewsLetter;