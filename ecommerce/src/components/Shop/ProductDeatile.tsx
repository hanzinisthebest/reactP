import React from 'react';
import ProductCard from '../../UI/ProductCard';
import { useGetProductById } from '../../Querys/query-products';
import { useParams } from 'react-router-dom';
import Loading from '../Layout/Loading';
import { Heading } from '@chakra-ui/react';

interface Props {
  
}

const ProductDeatiles: React.FC<Props> = () => {
  const {id} =useParams();
  const { isLoading, error, data:product } = useGetProductById(id);
  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return (
      <Heading as="h2" noOfLines={1}>
        cant fetch
      </Heading>
    );
  }
  return (
    <div>
      <ProductCard item = {product} pram={id}/>
    </div>
  );
};

export default ProductDeatiles;