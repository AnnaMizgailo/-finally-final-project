import React from "react";
import {NavLink} from "react-router-dom"
import {useAuth} from "../hooks/useAuth";
const Menu = () =>{
    const { isAuthenticated, login, logout} = useAuth();

    return(
        <nav>
            <ul>
                <li>
                    <NavLink to="/" exact="true" activeclassname="active">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/login" exact="true" activeclassname="active">
                        Sign in
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/register" exact="true" activeclassname="active">
                        Sign up
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/addpoint" exact="true" activeclassname="active">
                        Add point
                    </NavLink>
                </li>

            </ul>
        </nav>
    )
}
export default Menu;