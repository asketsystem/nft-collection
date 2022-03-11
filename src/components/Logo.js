import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LogoText = styled.h1`
  font-family: "Akaya Telivigala", cursive;
  font-size: ${(props) => props.theme.fontxxxl};
`;

const Logo = () => {
  return (
    <LogoText>
      <Link to="/">Askey</Link>
    </LogoText>
  );
};

export default Logo;
