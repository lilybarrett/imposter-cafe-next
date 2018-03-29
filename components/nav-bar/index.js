import React from "react";
import Link from 'next/link'
import { Nav, NavList, NavLink } from "./styles";

const NavBar = () => {
    return (
        <Nav>
            <NavList>
                <NavLink>
                    <Link href="/home"><a>Home</a></Link>
                </NavLink>
                <NavLink>
                    <Link href="/menu"><a>Menu</a></Link>
                </NavLink>
            </NavList>
        </Nav>
    );
}

export default NavBar;