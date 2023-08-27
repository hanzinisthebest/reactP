import {
  Box,
  Button,
  FormControl,
  HStack,
  Heading,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import classes from "./Colors.module.css";
import { useAppDispatch } from "../../../hooks/redux-hooks";
import { setFilter } from "../../../Store/productSlice";
import { log } from "console";
import { ColorsEnum } from "../../../models/product";
import { capitilize } from "../../../helpers/capitalize";
interface Props {}

const FilterColors: React.FC<Props> = () => {
  const dispatch = useAppDispatch();
  const handleButtonClick = (color: ColorsEnum) => {
    console.log(color);
    dispatch(setFilter({ color }));
  };
  return (
    <FormControl>
      <Heading as={"h5"} fontSize={"1rem"}>
        colors
      </Heading>
      <HStack display={"flex"} alignItems={"center"} lineHeight={1.5}>
        <Box
          as={"button"}
          className={classes.all}
          onClick={() => handleButtonClick(ColorsEnum.All)}
        >
          All
        </Box>
        {Object.values(ColorsEnum).map((color) => (
          <Box
            as={"button"}
            className={classes.color}
            background={color}
            data-color={color}
            onClick={() => handleButtonClick(color)}
          />
        ))}
      </HStack>
    </FormControl>
  );
};

export default FilterColors;
