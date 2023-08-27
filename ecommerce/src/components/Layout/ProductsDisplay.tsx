import React, { useEffect, useState } from "react";
// import { fetchProducts, useGetProducts } from '../../api';
import Product from "../../models/product";
import {
  Box,
  Button,
  HStack,
  Heading,
  VStack,
  useBreakpointValue,
  useMediaQuery,
} from "@chakra-ui/react";
import ProductHomeCard from "../../UI/ProductHomeCard";
import { Link } from "react-router-dom";
import { useGetProducts } from "../../Querys/query-products";
import Loading from "./Loading";
interface Props {}

const ProductsDisplay: React.FC<Props> = () => {
  const { isLoading, error, data: products } = useGetProducts();
  const notToShow = useBreakpointValue({ base: true, md: false });
  const [isMobile] = useMediaQuery("(max-width: 768px)")
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
    <VStack
      background={"#f1f5f8"}
      fontSize={isMobile ? ".875rem" : "1rem"}
      padding={"5rem 0"}
      display={"block"}
    >
      <Box textAlign={"center"} margin={0} padding={0}>
        <Heading as="h2" noOfLines={1}>
          featured products
        </Heading>
        <Box
          background={"#ab7a5f"}
          height={".25rem"}
          marginLeft={"auto"}
          marginRight={"auto"}
          width={"6rem"}
        ></Box>
      </Box>
      <HStack
        gridTemplateColumns={
          isMobile ? "" : "repeat(auto-fit, minmax(360px, 1fr))"
        }
        display={"grid"}
        margin={"4rem auto"}
        gap={"2.5rem"}
        maxWidth={"1170px"}
        width={notToShow ? "90vh" : ""}
      >
        <ProductHomeCard
          img={products[6].image}
          name={products[6].name}
          price={
            products[6].price.toString().substring(0, 3) +
            "." +
            products[6].price.toString().substring(3) +
            "$"
          }
          key={products[6].id}
        />
        <ProductHomeCard
          img={products[7].image}
          name={products[7].name}
          price={
            products[7].price.toString().substring(0, 3) +
            "." +
            products[7].price.toString().substring(3) +
            "$"
          }
          key={products[7].id}
        />
        <ProductHomeCard
          img={products[10].image}
          name={products[10].name}
          price={
            products[10].price.toString().substring(0, 3) +
            "." +
            products[10].price.toString().substring(3) +
            "$"
          }
          key={products[10].id}
        />
      </HStack>
      <Button
        cursor={"pointer"}
        as={Link}
        to={"/products"}
        borderRadius={"0.25rem"}
        boxShadow={"0 1px 3px rgba(0,0,0,.8)"}
        color={"#eaded7"}
        background={"#ab7a5f"}
        display={"block"}
        fontWeight={400}
        borderColor={"transparent"}
        fontSize={"1rem"}
        padding={"0.75rem 1.5rem"}
        transition={"all 0.3s linear"}
        textTransform={"uppercase"}
        _hover={{ background: "#c5a49", color: "#453227" }}
        textAlign={"center"}
        margin={"0px auto"}
        width={"148px"}
      >
        all products
      </Button>
    </VStack>
  );
};

export default ProductsDisplay;
