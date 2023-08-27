import { Checkbox, FormControl } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useAppDispatch } from '../../../hooks/redux-hooks';
import { setFilter } from '../../../Store/productSlice';

interface Props {
  
}

const ShippingFilter: React.FC<Props> = () => {
    const [isChecked, setIsChecked] = useState(false);
    const dispatch = useAppDispatch();
    const handelClick = ()=>{
        if(!isChecked){
        dispatch(setFilter({shipping:true}));
        setIsChecked(!isChecked);
        }
        else{
            dispatch(setFilter({shipping:false}));
            setIsChecked(!isChecked);
        }

    }
  return (
    <FormControl>
    <Checkbox onChange={handelClick} >Free Shipping</Checkbox>
    </FormControl>
  );
};

export default ShippingFilter;