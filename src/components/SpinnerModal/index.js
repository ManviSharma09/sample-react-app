import React from "react";
import styled from "styled-components";
import ActivityIndicator from "../ActivityIndicator";

const Overlay = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SpinnerModal = () => {
  return (
    <Overlay>
      <ActivityIndicator />
    </Overlay>
  );
};
export default SpinnerModal;
