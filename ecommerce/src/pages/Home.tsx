import React from 'react';
import Title from '../components/Layout/Title';
import { VStack } from '@chakra-ui/react';
import ProductsDisplay from '../components/Layout/ProductsDisplay';
import Loading from '../components/Layout/Loading';
import NewsLetter from '../components/Layout/NewsLetter';

interface Props {
  
}

const Home: React.FC<Props> = () => {
  return (
    <VStack>
       <Title/>
       <ProductsDisplay/>
       <NewsLetter/>
    </VStack>
    
  );
};

export default Home;