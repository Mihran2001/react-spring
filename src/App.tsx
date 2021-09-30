import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import ParallaxExample from "./ReactSpring/Parallax";
import FlippeImg from "./ReactSpring/UseSpring/Flipp";
import MainComponent from "./UseMemo/Compmonents/MainComponent";
import { Row, Col, Divider, Button } from "antd";
import "antd/dist/antd.css";

function App() {
  // const style = { background: "#0092ff", padding: "8px 0" };
  // return <MainComponent />;
  return (
    <>
      <Row>
        <Col span={8}>col-8</Col>
        <Col span={8} offset={8}>
          col-8
        </Col>
      </Row>
      <Row>
        <Col span={6} offset={6}>
          col-6 col-offset-6
        </Col>
        <Col span={6} offset={6}>
          col-6 col-offset-6
        </Col>
      </Row>
      <Row>
        <Col span={12} offset={6}>
          col-12 col-offset-6
        </Col>
      </Row>
    </>
  );
}

export default App;
