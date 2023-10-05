import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Category from './pages/Category'
import Trending from './pages/Trending';
import Item from './pages/Item';
import Login from './pages/Login';
import Page from './pages/404page';
import Register from './pages/Register';
import Cart from './pages/Cart';

const Layout = () => {
 return(
  <>
  <Navbar />
  <Outlet />
  </>
 );
};

const router = createBrowserRouter([
{
  path: "/",
  element: <Layout />,
  children: [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/categories",
      element: <Category />,
    },
    {
      path: "/trending",
      element: <Trending />,
    },
    {
      path: "/item",
      element: <Item />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
  ]
},
{
  path: "/login",
  element: <Login />,
},
{
  path: "/register",
  element: <Register />,
},
{
  path: "*",
  element: <Page />,
},
]);

function App() {
  return (
  <RouterProvider router={router}/>
  );
}

export default App;
