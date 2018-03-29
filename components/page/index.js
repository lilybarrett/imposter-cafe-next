import React from "react";
import NavBar from "../nav-bar";
import { Wrapper } from "./styles";

const Page = (props) => {
    const { children } = props;
    return (
        <Wrapper>
            <NavBar />
            { children }
        </Wrapper>
    )
}

export default Page;