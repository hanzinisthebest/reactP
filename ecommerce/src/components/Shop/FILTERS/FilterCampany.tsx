import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux-hooks";
import { productsSelector, setFilter } from "../../../Store/productSlice";
interface Props {}

const FilterCampany: React.FC<Props> = () => {
  const dispatch = useAppDispatch();
  const company =useAppSelector(productsSelector).filters.company;
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;
    dispatch(setFilter({ company: newValue }));
  };
  return (
    <FormControl>
      <FormLabel as={"h5"}>company</FormLabel>
      <Select onChange={handleSelectChange} value={company}>
        <option value="all">all</option>
        <option value="marcos">marcos</option>
        <option value="liddy">liddy</option>
        <option value="ikea">ikea</option>
        <option value="caressa">caressa</option>
      </Select>
    </FormControl>
  );
};

export default FilterCampany;
