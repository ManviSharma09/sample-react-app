import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../../actions/dataFetchingActions";

import Header from "../Header";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: scroll;
`;

const Layout = props => {
  const dispatch = useDispatch();
  const { userDetails } = useSelector(state => ({
    userDetails: state.auth.userDetails
  }));
  useEffect(() => {
    if (userDetails.userId) {
      console.log("Entered here", userDetails.userId);
      dispatch(getUserData(userDetails.userId));
    }
  });
  return (
    <LayoutContainer>
      <Header />
      {props.children}
    </LayoutContainer>
  );
};
export default Layout;
