import React from "react";
import { Jumbotron, Row, Col, Image } from "react-bootstrap";
import {
  MainSectionContainer,
  ImageBox,
  TitleBox,
  SubtitleBox,
} from "./elements";

const MainSection = (props) => {
  return (
    <MainSectionContainer>
      <Row>
        <Col className="d-flex justify-content-end">
          <img src={props.image} alt={props.alt} width="80%" />
        </Col>
        <Col>
          <Row>
            <TitleBox>{props.title}</TitleBox>
          </Row>
          <Row>
            <SubtitleBox>{props.subtitle}</SubtitleBox>
          </Row>
        </Col>
      </Row>
    </MainSectionContainer>
  );
};

export default MainSection;
