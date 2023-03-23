import React from "react";
import styled from "styled-components";

const Logo = styled.div`
    padding: 20px 2px;
    background-color: lightsteelblue;
    width: 100%;
    margin: 10px;
    display: flex;
    color: midnightblue;
`;

const NasaLogo = () => {
    return (
        <Logo> 
            <img src="../../nasa-logo-web-rgb.png" alt='NASA logo'></img>
            <div className="header">
                <h1>NASA</h1>
                <h3>Photo of the Day</h3>
            </div>
        </Logo>
       
    );
}

export default NasaLogo;