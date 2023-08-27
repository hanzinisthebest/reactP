import { Box, Button, FormControl, Heading } from "@chakra-ui/react";
import React from "react";
import classes from "./Category.module.css";
import { useAppDispatch } from "../../../hooks/redux-hooks";
import { setFilter } from "../../../Store/productSlice";
import { CategoryEnum } from "../../../models/product";
import { capitilize } from "../../../helpers/capitalize";
interface Props {}

const FilterCategory: React.FC<Props> = () => {
  const dispatch = useAppDispatch();
  
  const handleButtonClick = (category: CategoryEnum) => {
    dispatch(setFilter({ category }));
  };

  return (
    <FormControl marginBottom={"1.25rem"}>
      <Heading
        as={"h5"}
        marginBottom={"0.5rem"}
        fontSize={"1rem"}
        lineHeight={1.25}
        textTransform={"capitalize"}
      >
        Category
      </Heading>
      <Box>
        {Object.values(CategoryEnum).map((cat) => (
          <Button
            onClick={() => handleButtonClick(cat)}
            display={"block"}
            className={classes.category}
          >
            {capitilize(cat)}
          </Button>
        ))}
      </Box>
    </FormControl>
  );
};

export default FilterCategory;
