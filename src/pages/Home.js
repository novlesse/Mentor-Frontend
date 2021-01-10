import React from "react";
import { Jumbotron, Row, Col, Image, Container } from "react-bootstrap";
import Footer from "../components/Footer.js";
import Hero from "../components/Hero.js";
import MainSection from "../components/MainSection.js";
import MainSectionTwo from "../components/MainSectionTwo.js";

const HomeSection = (props) => {
  const sectionOne = {
    title: "Want to learn something new?",
    subtitle: "Start Searching",
    img: require("../images/pottery.jpg").default,
    alt: "pottery",
  };

  const sectionTwo = {
    title: "Have a skill? Teach a class.",
    subtitle: "Register Now",
    img: require("../images/drawing.jpg").default,
    alt: "art",
  };
  const sectionThree = {
    title: "Have a space to rent out?",
    subtitle: "Email to let us know",
    img: require("../images/rentalroom.jpg").default,
    alt: "empty space",
  };

  return (
    <Container fluid>
      <Hero />
      <MainSection
        title={sectionOne.title}
        subtitle={sectionOne.subtitle}
        image={sectionOne.img}
        alt={sectionOne.alt}
      />
      <MainSectionTwo
        title={sectionTwo.title}
        subtitle={sectionTwo.subtitle}
        image={sectionTwo.img}
        alt={sectionTwo.alt}
      />
      <MainSection
        title={sectionThree.title}
        subtitle={sectionThree.subtitle}
        image={sectionThree.img}
        alt={sectionThree.alt}
      />

      <Footer />
    </Container>
  );
};

export default HomeSection;
