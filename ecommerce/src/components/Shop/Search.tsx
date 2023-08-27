import { FormControl, Input } from "@chakra-ui/react";
import React from "react";
import { productsSelector, setFilter } from "../../Store/productSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";

interface Props {}

const Search: React.FC<Props> = () => {
  const dispatch = useAppDispatch();
  const search =useAppSelector(productsSelector).filters.search;
  const handelSearch =(event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    dispatch(setFilter({search:newValue}));
  };
  return (
    <FormControl marginBottom={"1.25rem"} >
      <Input
        value={search}
        onChange={handelSearch}
        type="text"
        padding={"0.5rem"}
        background={"#f1f5f8"}
        borderRadius={"0.25rem"}
        borderColor={"transparent"}
        letterSpacing={"0.1rem"}
        placeholder="Search"
      />
    </FormControl>
  );
};

export default Search;
