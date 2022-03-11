import React from "react";
import styled from "styled-components";

const Section = styled.section`
  width: 100vw;
  background-color: ${(props) => props.theme.body};
`;

const NavBar = styled.nav`
  display: flex;
  justify-centent: space-between;
  align-items: center;

  width: 85%;
  height: 5rem;
  margin: 0 auto;
`;

const Navigation = () => {
  return (
    <Section>
      <NavBar>
        <h2>Logo</h2>
        <h2>Menu</h2>
        <h2>Button</h2>
      </NavBar>
    </Section>
  );
};

export default Navigation;
