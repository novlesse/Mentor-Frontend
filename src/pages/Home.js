import React from 'react';
import { Jumbotron, Row, Col, Image, Container } from 'react-bootstrap';
import Footer from '../components/Footer.js';
import Hero from '../components/Hero.js';
import MainSection from '../components/MainSection.js';
import MainSectionTwo from '../components/MainSectionTwo.js';
import MainSectionThree from '../components/MainSectionThree.js';
import '../App.css'

const HomeSection = () => {
  const sectionOne = {
    title: "Have a space to rent out?",
    subTitle: "Email to let us know"
  };

  const sectionTwo = "Have a space to rent out?";

  const sectionThree = {
    title: "Have a space to rent out?",
    subTitle: "Email to let us know"
  };


	return (
		<Container fluid>
			<Hero />
			<MainSection />
			<MainSectionTwo />
			<MainSectionThree />

			
      <Footer />
		</Container>

	);
};

export default HomeSection;
