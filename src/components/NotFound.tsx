import React from "react";
import {Link} from "react-router-dom";
const NotFound: React.FC = () => {
    return (
        <>
            <h2>
                Page Not Found
            </h2>
            <h4>
                Go to home page <Link to='/'>Home page</Link>
            </h4>
        </>

    )
}
export default NotFound;