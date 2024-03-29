import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Root from '@app/components/root/Root';
import Home from '@app/components/home/Home';
import Contacts from '@app/components/contacts/Contacts';
import HowToPlant from './components/howToPlant/HowToPlant';
import ShoppingCart from '@app/components/shoppingCard/ShoppingСart';
import NotFound from '@app/components/root/NotFound';

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Crimson Pro', serif;
}
body {
  max-width: 1440px;
  margin: 0 auto;
  
}
`;
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="howToPlant" element={<HowToPlant />} />
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
