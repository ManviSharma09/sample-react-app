import React, { useEffect } from "react";
import { fabric } from "fabric";

import styled from "styled-components";
import Layout from "../../components/Layout";
import animatedUser from "../../utils/images/animatedUser.webp";

const AnimatedImg = styled.img`
  width: 50px;
  height: 50px;
`;


const Canvas = () => {

  useEffect(() => {
    var canvas = new fabric.Canvas('canvas');
    var rect = new fabric.Rect({
      top: 100,
      left: 100,
      width: 60,
      height: 60,
      fill: 'blue',
    });
    var text = new fabric.Text("Hello world", { fontFamily: "delicious-500" })
    var imgElement = document.getElementById('my-image');
    var imgInstance = new fabric.Image(imgElement, {});
    canvas.add(rect, text, imgInstance);
  })

  return (
    <canvas id="canvas" width="500" height="500">
      <AnimatedImg src={animatedUser} id="my-image"></AnimatedImg>
    </canvas>
  );
};
export default Canvas;
