import React from "react";
import { Jumbotron, Row, Col, Image } from "react-bootstrap";
import {
  MainSectionContainerTwo,
  ImageBox,
  SubtitleBox,
  TitleBoxTwo,
} from "./elements";

const MainSectionTwo = (props) => {
  console.log(props.image);
  return (
    <MainSectionContainerTwo>
      <Row>
        <Col>
          <Col>
            <Row className="d-flex justify-content-end">
              <TitleBoxTwo>{props.title}</TitleBoxTwo>
            </Row>
            <Row className="d-flex justify-content-end">
              <SubtitleBox>{props.subtitle}</SubtitleBox>
            </Row>
          </Col>
        </Col>
        <Col>
          <img src={props.image} alt={props.alt} width="80%" />
        </Col>
      </Row>
    </MainSectionContainerTwo>
  );
};

export default MainSectionTwo;
