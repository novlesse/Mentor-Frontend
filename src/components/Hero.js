import React from 'react';
import { Jumbotron, Row, Col } from 'react-bootstrap';
import { HeroContainer, EmailBox, SubscribeBox } from './elements';
const Hero = () => {
	return (
		<HeroContainer>
			<Row>
				<Col>
					Logo
					<h1 className="d-flex justify-content-center">Finding Local Classes Made Easier</h1>
					<h3 className="d-flex justify-content-center">
						Be the first to know about new classes in your area!
					</h3>
					<Col className="d-flex justify-content-center">
						<EmailBox placeholder="email here" />
						<SubscribeBox>Subscribe!</SubscribeBox>
					</Col>
				</Col>
			</Row>
		</HeroContainer>
	);
};

export default Hero;
