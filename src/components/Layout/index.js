import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import Header from "../Header";

const LayoutContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow-y: scroll;
  flex-direction: column;
`;

const Layout = props => {
  const { userDetails } = useSelector(state => ({
    userDetails: state.auth.userDetails
  }));
  return (
    <LayoutContainer>
      <Header userDetails={userDetails} />
      {props.children}
    </LayoutContainer>
  );
};
export default Layout;
