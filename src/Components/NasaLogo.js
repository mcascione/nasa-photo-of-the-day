import React from "react";
import styled from "styled-components";

const Logo = styled.div`
    padding: 20px 2px;
    background-color: black;
    width: 10%;
    margin: 10px;
`;

const NasaLogo = () => {
    return (
        <Logo> 
            <img src="../../nasa-logo-web-rgb.png" alt='NASA logo'></img>
        </Logo>
       
    );
}

export default NasaLogo;