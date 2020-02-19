import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import Header from "../Header";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: scroll;
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
