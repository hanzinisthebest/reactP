import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import RootLayout from './pages/Root';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NewsletterPage from './pages/NewsletterPage';
import { AppProvider } from './store/AppContext';
import DeatilesPage from './pages/DeatilesPage';
const router = createBrowserRouter([
  {
    path:'/',
    element:<RootLayout/>,
    id:'root',
    children:[
      {index:'true',element:<HomePage/>,},
      {
        path:'about',
        element:<AboutPage/>,
      },
      {
        path:'newsletter',
        element:<NewsletterPage/>
      },
      {
        path:'cocktail/:id',
        element:<DeatilesPage/>
      }
    ]
  }
])
function App() {
  return(
  <AppProvider> 
    <RouterProvider router={router}/>
  </AppProvider>
  )
}

export default App;
