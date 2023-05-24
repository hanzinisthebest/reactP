import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import{RouterProvider, createBrowserRouter} from 'react-router-dom'
import AddTask from './components/AddTask';
import Example from './components/example';

const router = createBrowserRouter([
  { path: '/', element: <App/>}
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
    <RouterProvider router={router} />

    </ChakraProvider>
  </React.StrictMode>
);

