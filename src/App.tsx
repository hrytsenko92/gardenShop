import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Root from '@app/components/root/Root';
import Home from '@app/components/Home';
import Contacts from '@app/components/Contacts';
import ShoppingCart from '@app/components/ShoppingСart';
import NotFound from '@app/components/root/NotFound';

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  max-width: 1440px;
  margin: 0 auto;
  font-family: 'Lato', sans-serif;
}
`;
const router = createBrowserRouter(
  createRoutesFromElements(
    // add to "/" error element
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="shoppingCart" element={<ShoppingCart />} />
      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
};
export default App;
