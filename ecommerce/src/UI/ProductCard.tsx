import {
  Box,
  Button,
  Center,
  Divider,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
  chakra,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Product, { SingalProduct } from "../models/product";
import { Link } from "react-router-dom";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
// import classes from "../components/Shop/FILTERS/Colors.module.css";
import classes from "./ProductCard.module.css";
interface Props {
  item: SingalProduct;
  pram: string;
}

const ProductCard: React.FC<Props> = ({ item, pram }) => {
  const ActiveImage = chakra(Image, {
    baseStyle: {
      _active: {
        borderColor: "#ab7a5f",
      },
    },
  });
  const [number, setNumber] = useState(1);
  const [activeIndex, setActiveIndex] = useState(0);
  const handelPlus = () => {
    setNumber(number + 1);
  };
  const handelMinus = () => {
    if (number === 0) {
      return;
    }
    setNumber(number - 1);
  };
  return (
    <VStack
      minHeight={"calc(80vh - 10rem)"}
      width={"95vw"}
      padding={"5rem 0"}
      margin={"0 auto"}
    >
      <Button
        color={"#eaded7"}
        background={"#ab7a5f"}
        padding={".375rem .75rem"}
        _hover={{ color: "black" }}
        as={Link}
        to={"/products"}
      >
        BACK TO PRODUCTS
      </Button>

      <HStack
        gap={"4rem"}
        display={"grid"}
        marginTop={"2rem"}
        gridTemplateColumns={"1fr 1fr"}
        alignItems={"center"}
      >
        <Box>
          <Image
            src={item.images[activeIndex].url}
            height={"500px"}
            width={"100%"}
            display={"block"}
            borderRadius={"0.25rem"}
            objectFit={"cover"}
          />
          <HStack
            marginTop={"1rem"}
            display={"grid"}
            gridTemplateColumns={"repeat(5, 1fr)"}
            gap={"1rem"}
            cursor={"pointer"}
          >
            {item.images.map((image, index) => (
              <ActiveImage
                key={index}
                src={image.url}
                onClick={() => setActiveIndex(index)}
                className={classes.img}
              />
            ))}
          </HStack>
        </Box>

        <VStack>
          <Heading as={"h2"} id="name" textTransform={"capitalize"}>
            {item.name}
          </Heading>
          <HStack id="rate">
            {[...Array(5)].map((star, index) => {
              const ratingValue = index + 1;
              return (
                <Box key={index}>
                  {ratingValue <= Math.floor(item.stars) ? (
                    <FaStar color="#ffc107" size={20} />
                  ) : ratingValue === Math.ceil(item.stars) ? (
                    <FaStarHalfAlt color="#ffc107" size={20} />
                  ) : (
                    <FaStar color="#e4e5e9" size={20} />
                  )}
                </Box>
              );
            })}
            <Text marginLeft={"0.5rem"}>({item.reviews} customer reviews)</Text>
          </HStack>

          <Text id="description" maxWidth={"45rem"} lineHeight={2}>
            {item.description}
          </Text>
          <Text
            textTransform={"capitalize"}
            width={"300px"}
            display={"grid"}
            gridTemplateColumns={"125px 1fr"}
          >
            <span>Available : </span> {item.stock > 0 ? "In Stock" : ""}
          </Text>
          <Text
            textTransform={"capitalize"}
            width={"300px"}
            display={"grid"}
            gridTemplateColumns={"125px 1fr"}
          >
            <span>SKU :</span>
            {item.id}
          </Text>
          <Text
            textTransform={"capitalize"}
            width={"300px"}
            display={"grid"}
            gridTemplateColumns={"125px 1fr"}
          >
            <span>Brand :</span>
            {item.company}
          </Text>
          <Divider borderTop={"1px solid #bcccdc"} />
          <HStack
            display={"grid"}
            width={"300px"}
            gridTemplateColumns={"125px 1fr"}
          >
            <span>colors:</span>
            <HStack display={"flex"} alignItems={"center"} lineHeight={1.5}>
              {Object.values(item.colors).map((color) => (
                <Box
                  as={"button"}
                  className={classes.color}
                  background={color}
                  data-color={color}
                />
              ))}
            </HStack>
          </HStack>
          <Box marginTop={"2rem"}>
            <HStack
              display={"grid"}
              width={"140px"}
              placeItems={"center"}
              gridTemplateColumns={"repeat(3, 1fr)"}
            >
              <Button onClick={handelMinus} className={classes.button}>
                -
              </Button>
              <Heading as={"h2"}>{number}</Heading>
              <Button onClick={handelPlus} className={classes.button}>
                +
              </Button>
            </HStack>
            <Button
              textTransform={"uppercase"}
              color={"#eaded7"}
              background={"#ab7a5f"}
              padding={".375rem .75rem"}
              _hover={{ color: "black" }}
              as={Link}
              to={"/cart"}
            >
              add to cart
            </Button>
          </Box>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default ProductCard;
