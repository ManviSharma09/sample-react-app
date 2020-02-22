import React from "react";
import Cropper from "cropperjs";
import styled from "styled-components";
import Layout from "../../components/Layout";
import photo from "../../utils/images/photo.svg";
import camera from "../../utils/images/camera.svg";

const DashboardContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  padding: 20px;
  background-color: #e1e3e9;
`;

const StyledImage = styled.img`
  width: 60px;
  height: 60px;
`;

const UploadAndEditPhotos = styled.div`
  width: 20%;
  min-width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-right: solid #4a442e 2px;
`;

const UploadedPhotos = styled.div`
  display: flex;
  flex: 1;
  overflow-y: scroll;
  overflow-x: scroll;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-left: solid #4a442e 2px;
  padding: 20px;
`;

const PhotoDashboard = () => {
  return (
    <Layout>
      <DashboardContainer>
        <UploadAndEditPhotos>
          <StyledImage src={photo} alt="photo here"></StyledImage>
          <div>Upload Images Here</div>
        </UploadAndEditPhotos>
        <UploadedPhotos>
          <StyledImage src={camera} alt="photo here"></StyledImage>
          <div>No Uploaded Photos </div>
        </UploadedPhotos>
      </DashboardContainer>
    </Layout>
  );
};
export default PhotoDashboard;
