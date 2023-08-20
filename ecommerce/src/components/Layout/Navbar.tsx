import { Box, Button, Center, Flex, HStack, Icon, Spacer, Tab, TabList, Tabs, Text, border, useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import {FaShoppingCart} from "react-icons/fa"
import {BiSolidUserPlus} from 'react-icons/bi'
import { useBreakpointValue } from '@chakra-ui/react'
import IconBurger from '../../Assets/IconBurger';
import { useAppSelector } from '../../hooks/redux-hooks';
import { cartSelector } from '../../Store/cartSlice';
interface Props {
  
}

const Navbar: React.FC<Props> = () => {
  const showBurger = useBreakpointValue({ base: true, md: false });
  const cartCount = useAppSelector(cartSelector).cartQuantity;
  
  return (
<Center>



<HStack gap={"96"} >
<Box width={190} as = {NavLink} to={'/'} >
<img src="https://react-course-comfy-sloth-store.netlify.app/static/media/logo.221f6b13e6eaaad5828372464f73a1a4.svg" alt="comfy sloth"/>
</Box>
{showBurger ? <IconBurger/>:<HStack gap={"96"}>
<HStack gap={"8"} >
 
    <Text fontSize={"xl"} border="none" _hover={{
      borderBlockEnd:"1px",
      borderColor:"#ab7a5f"
    }} as={NavLink} to={'/'}>Home</Text>
    <Text 
    _hover={{
      borderBlockEnd:"1px",
      borderColor:"#ab7a5f"
    }}
    fontSize={"xl"}
    as={NavLink} to={'/about'}>About</Text>
    <Text 
    _hover={{
      borderBlockEnd:"1px",
      borderCoor:"#ab7a5f"
    }}
    fontSize={"xl"}
    as={NavLink} to={'/products'}>Products</Text>
</HStack>
<HStack gap = "14">
<HStack  gap="4"  >
<Box as={NavLink} fontSize={24}   to={'/cart'}>
  Cart
</Box>
<FaShoppingCart  size={46}/>
<Box as={NavLink} color={'alicebl ue'}  to ={'/cart'} m="-7" mt="-14" textAlign={"center"} bg="#ab7a5f" w="50%" borderRadius={"50%"} >
{cartCount}
</Box>
</HStack>
<HStack>
<Box as={NavLink} fontSize={24} to={'/login'}>
Login
</Box>
<BiSolidUserPlus size={46}/>
</HStack>
</HStack>
</HStack>
}
</HStack>
</Center>

  );
};

export default Navbar;