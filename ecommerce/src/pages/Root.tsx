import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Layout/Navbar';

interface Props {
  
}

const Root: React.FC<Props> = () => {
  return (
    <>
    <Navbar/>
    <main>
    <Outlet/>
    </main>
    </>
  );
};

export default Root;