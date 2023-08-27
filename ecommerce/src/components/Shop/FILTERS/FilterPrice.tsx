import {
  FormControl,
  Heading,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { productsSelector, setFilter } from "../../../Store/productSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux-hooks";
import { formatPrice } from "../../../helpers/formatPrice";

interface Props {}
interface SliderChangeEvent {
  value: number;
  type: "change";
}

const FilterPrice: React.FC<Props> = () => {
  const dispatch = useAppDispatch();
  const price = useAppSelector(productsSelector).filters.price;
  const maxPrice = useAppSelector(productsSelector).maxFilterPrice;

  const handleChange = (event: SliderChangeEvent) => {
    dispatch(setFilter({ price: event.value }));
  };

  const wrapSliderChange = (value: number) => {
    const event: SliderChangeEvent = {
      value,
      type: "change",
    };
    handleChange(event);
  };

  return (
    <FormControl>
      <Heading as={"h5"} fontSize={"1rem"}>
        Price
      </Heading>
      <Text>{formatPrice(price)}</Text>
      <Slider
        aria-label="Price"
        min={0}
        value={price}
        max={maxPrice}
        onChange={wrapSliderChange}
        step={2}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </FormControl>
  );
};

export default FilterPrice;
