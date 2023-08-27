import React, { useEffect, useState } from "react";
import { useGetProducts } from "../../Querys/query-products";
import Loading from "../Layout/Loading";
import { HStack, Heading, Stack, VStack } from "@chakra-ui/react";
import { useAppSelector, useAppDispatch } from "../../hooks/redux-hooks";
import ProductsList from "./ProductsList";
import Filters from "./FILTERS/Filters";
import { initFilters, productsSelector } from "../../Store/productSlice";
import { setProducts } from "../../Store/productSlice";
interface Props {}

const Products: React.FC<Props> = () => {
  const { isLoading, error, data } = useGetProducts();
  const products = useAppSelector(productsSelector).filteredProducts;
  const dispatch = useAppDispatch();
  // const [sortedProducts,setSortedProducts]= useState([...products].sort((a, b) => a.price - b.price));
  // const handelSort = (value:string)=>{
  //   if(value === "price-lowest"){
      
  //     setProducts(sortedProducts.sort((a, b) => a.price - b.price));
  //   }
  //   if(value === "price-highest"){
      
  //     setProducts(sortedProducts.sort((a, b) => b.price - a.price));
  //   }
  //   if(value === "name-a"){
      
  //     setProducts(sortedProducts.sort((a, b) => a.name.localeCompare(b.name)));
  //   }
  //   if(value === "name-z"){
      
  //     setProducts(sortedProducts.sort((a, b) => b.name.localeCompare(a.name)));
  //   }
  // }
  useEffect(() => {
    if (data) {
      dispatch(setProducts(data));
      dispatch(initFilters());
    }
  }, [data]);
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
    <Stack minHeight={"calc(80vh - 10rem)"}>
      <Stack
        display={"grid"}
        gridTemplateColumns={"200px 1fr"}
        gap={"3rem 1.5rem"}
        margin={"4rem auto"}
      >
        <Filters />
        <ProductsList  items={products} />
      </Stack>
    </Stack>
  );
};

export default Products;
