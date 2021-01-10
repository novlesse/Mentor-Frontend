import React from 'react';
import { Jumbotron, Row, Col, Image } from 'react-bootstrap';
const MainSection = () => {
	return (
		<Jumbotron fluid>
			<Row>
				<Col>
                    <Col>
					<Row className="d-flex justify-content-end">
						<h2>Teach a class</h2>
					</Row>
					<Row className="d-flex justify-content-end">
						<h4>Sign up now!</h4>
					</Row>
                    </Col>
				</Col>
				<Col>
					<Image className="imageBox" />
					Image Here
				</Col>
			</Row>
		</Jumbotron>
	);
};

export default MainSection;
