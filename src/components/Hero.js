import React from 'react'
import {Jumbotron, Row, Col} from 'react-bootstrap';
const Hero = () => {
    return (
        <Jumbotron>
            <Row>
				<Col>
					Logo
					<h1>Finding Local Classes Made Easier</h1>
					<h3>Be the first to know about new classes in your area!</h3>
				</Col>
			</Row>

        </Jumbotron>
    )
}

export default Hero;