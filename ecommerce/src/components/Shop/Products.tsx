import React, { useEffect } from "react";
import { useGetProducts } from "../../Querys/query-products";
import Loading from "../Layout/Loading";
import { HStack, Heading, Stack, VStack } from "@chakra-ui/react";
import { useAppSelector,useAppDispatch } from '../../hooks/redux-hooks';
import ProductsList from "./ProductsList";
import Filters from "./Filters";
import { productsSelector } from "../../Store/productSlice";
import { setProducts } from "../../Store/productSlice";
interface Props {}

const Products: React.FC<Props> = () => {
  const { isLoading, error, data } = useGetProducts();
  const products = useAppSelector(productsSelector).filteredProducts;
  const dispatch =useAppDispatch();
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
  dispatch(setProducts(data))     
  return (
    <Stack minHeight={'calc(80vh - 10rem)'}>
    <Stack
      display={'grid'}
      gridTemplateColumns={'200px 1fr'}
      gap={'3rem 1.5rem'}
      margin={'4rem auto'}
   
    >
      <Filters />
      <ProductsList items={products} />
    </Stack>
    </Stack>
  );
};

export default Products;
