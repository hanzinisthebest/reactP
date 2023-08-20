import { FormControl, Input } from "@chakra-ui/react";
import React from "react";

interface Props {}

const Search: React.FC<Props> = () => {
  return (
    <FormControl marginBottom={"1.25rem"}>
      <Input
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
