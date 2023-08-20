import { Box, FormControl, Heading, Input, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Text } from "@chakra-ui/react";
import { log } from "console";
import React, { useState } from "react";
import { setPriceFilter } from "../../Store/productSlice";
import { useAppDispatch } from "../../hooks/redux-hooks";

interface Props {}
interface SliderChangeEvent {
  value: number;
  type: 'change';
}

const FilterPrice: React.FC<Props> = () => {
  const dispatch =useAppDispatch();
  const [price,setPrice] = useState(3099.99);
  const sliderRef = React.useRef<HTMLDivElement>(null);

  const handleChange = (event: SliderChangeEvent) => {
      setPrice(event.value);
      dispatch(setPriceFilter(event.value));
  };

  const wrapSliderChange = (value: number) => {
    const event: SliderChangeEvent = {
      value,
      type: 'change',
    };
    handleChange(event);
  };

  return (
    <FormControl>
      <Heading as={"h5"} fontSize={'1rem'}>Price</Heading>
      <Text>${price}</Text>
    <Slider
    ref={sliderRef}
      aria-label='Price'
      defaultValue={3099.99}
      min={0}
      max={3099.99}
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
