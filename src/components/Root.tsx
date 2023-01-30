import {NavLink, Outlet} from "react-router-dom";
import React from "react";
const Root = () => {
    return ( // div styled
        <>
            <header style={{
                border: "1px solid red",
                // margin: "50px",
                backgroundColor: "grey"
            }}>
                <NavLink to="/" >Home</NavLink>
                <NavLink to="/contacts" >Contact</NavLink>
                <NavLink to="/other" >Other</NavLink>
                <NavLink to="/shoppingCart" >ShoppingCart</NavLink>
            </header>
            <main>
                <Outlet/>
            </main>
        </>
    )
}
export default Root