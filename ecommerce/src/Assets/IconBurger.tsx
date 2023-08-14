import React, { useState } from 'react';
import { IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerBody, VStack, Link } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom';

const IconBurger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <IconButton
        icon={<HamburgerIcon />}
        variant="ghost"
        size="md"
        aria-label="Open menu"
        onClick={toggleDrawer}
        color={"#ab7a5f"}
      />

      <Drawer placement="right" onClose={toggleDrawer} isOpen={isOpen} >
        <DrawerOverlay  />
        <DrawerContent  >
          <DrawerBody>
            <VStack  spacing={4}>
              <NavLink to={'/'}>Home</NavLink>
              <NavLink to={'/about'}>About</NavLink>
              <NavLink to={'/products'}>Products</NavLink>
              <NavLink to={'/cart'}>Cart</NavLink>
              <NavLink to={'/login'}>Login</NavLink>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default IconBurger;