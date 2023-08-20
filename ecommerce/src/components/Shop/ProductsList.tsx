import React, { useState } from "react";
import Product from "../../models/product";
import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  IconButton,
  Select,
  Text,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";
import ProductHomeCard from "../../UI/ProductHomeCard";
import ProductDisplayCard from "../../UI/ProductDisplayCard";
import { HamburgerIcon } from "@chakra-ui/icons";
import ProductListCard from "../../UI/ProductListCard";

interface Props {
  items: Product[];
}

const ProductsList: React.FC<Props> = ({ items }) => {
  const [isMobile] = useMediaQuery("(max-width: 900px)");
  const [isActiveDisplay, setIsActiveDisplay] = useState(true);
  const [isActiveList, setIsActiveList] = useState(false);

  const handelDisplay = () => {
    setIsActiveDisplay(true);
    setIsActiveList(false);
  };
  const handelList = () => {
    setIsActiveList(true);
    setIsActiveDisplay(false);
  };
  return (
    <VStack>
      <HStack
        display={"grid"}
        gridTemplateColumns={"auto auto 1fr auto"}
        columnGap={"2rem"}
        alignItems={"center"}
        marginBottom={"2rem"}
      >
        <HStack
          display={"grid"}
          gridTemplateColumns={"1fr 1fr"}
          columnGap={"0.5rem"}
          padding={0}
          margin={0}
        >
          <Button
            background={isActiveDisplay ? "#222" : "transparent"}
            color={isActiveDisplay ? "#fff" : "#222"}
            onClick={handelDisplay}
          >
            D
          </Button>
          <IconButton
            background={isActiveList ? "#222" : "transparent"}
            color={isActiveList ? "#fff" : "#222"}
            onClick={handelList}
            aria-label="display as list"
            icon={<HamburgerIcon />}
          />
        </HStack>
        <Text textTransform={"capitalize"} marginBottom={"0px"}>
          22 Products Found
        </Text>
        {/* <Divider border={'none'} borderTop={'1px solid #bcccdc'} color={'#bcccdc'}/> */}
        {/* <hr style={{border:'none',borderTop:'1px solid #bcccdc'}} /> */}

        <FormControl display={"flex"} flexFlow={"nowrap"} alignItems={"center"}>
          <FormLabel htmlFor="select">Sort By</FormLabel>
          <Select
            id="select"
            borderColor={"transparent"}
            fontSize={"1rem"}
            textTransform={"capitalize"}
            padding={"0.25rem 0.5rem"}
          >
            <option value="price-lowest">price (lowest)</option>
            <option value="price-highest">price (highest)</option>
            <option value="name-a">name (a - z)</option>
            <option value="name-z">name (z - a)</option>
          </Select>
        </FormControl>
      </HStack>
      {isActiveDisplay?<HStack
        display={"grid"}
        fontSize={"1rem"}
        gridTemplateColumns={isMobile ? "repeat(2, 1fr)" : "repeat(3, 1fr)"}
        gap={"2rem 1.5rem"}
      >
        {items.map((item) => {
          return (
            <ProductDisplayCard
              img={item.image}
              name={item.name}
              price={
                item.price.toString().substring(0, 3) +
                "." +
                item.price.toString().substring(3) +
                "$"
              }
            />
          );
        })}
      </HStack>:
      <VStack display={'grid'} rowGap={'3rem'} fontSize={'1rem'} >
        {items.map((item)=>{
          return(
            <ProductListCard
            img={item.image}
            name={item.name}
            price={
              item.price.toString().substring(0, 3) +
              "." +
              item.price.toString().substring(3) +
              "$"
            }
            description={item.description.split("authentic")[0]+"authentic"+" ..."}
             />
          )
        })}
      </VStack>}
    </VStack>
  );
};

export default ProductsList;
