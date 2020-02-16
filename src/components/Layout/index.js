import React from "react";
import Header from "../Header";
import styled from "styled-components";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: scroll;
`;

const Layout = props => {
  return (
    <LayoutContainer>
      <Header />
      {props.children}
    </LayoutContainer>
  );
};
export default Layout;
