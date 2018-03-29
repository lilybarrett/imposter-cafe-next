import React from "react";
import { CafeTitle, HomeImage } from "./styles";

const HomePage = () => {
    return (
        <div>
            <CafeTitle>Welcome to Imposter Cafe!</CafeTitle>
            <HomeImage src="/static/images/donuts.jpeg" />
        </div>
    )
}

export default HomePage;