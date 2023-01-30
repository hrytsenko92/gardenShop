import React from "react";
import {
    createBrowserRouter,
    createRoutesFromElements, NavLink, Outlet,
    Route,
    RouterProvider,
} from "react-router-dom";
import styled, { createGlobalStyle } from 'styled-components'
import Root from "@app/components/Root";
import Home from "@app/components/Home";
import Contacts from "@app/components/Contacts";
import Other from "@app/components/Other";
import ShoppingCart from "@app/components/ShoppingСart";
import NotFound from "@app/components/NotFound";

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: yellowgreen;
}

body {
  min-height: 100vh;
  background-color: yellow;
}
`

const router = createBrowserRouter(
    createRoutesFromElements( // add to "/" error element
        <Route path="/" element={<Root />}>
            <Route index element={<Home />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="other" element={<Other />} />
            <Route path="shoppingCart" element={<ShoppingCart />} />
            <Route path="*" element={<NotFound />} />
        </Route>
    )
);

const App: React.FC = () => {
    return (
        <>
            <GlobalStyle />
            <RouterProvider router={router} />
        </>

    )
}
export default App;