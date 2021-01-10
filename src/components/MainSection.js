import React from 'react'
import {Jumbotron, Row, Col, Image} from 'react-bootstrap';
import '../App.css'
const MainSection = () => {
    return (
        <Jumbotron fluid >
           <Row>
				<Col className="d-flex justify-content-end">
					<Image class="imageBox" />
                    Image Here
				</Col>
                <Col>
                    <Row><h2>Want to learn something new?</h2></Row>
					<Row><h4>Start Searching</h4></Row>
				</Col>
			</Row>
            
      

        </Jumbotron>
    )
}

export default MainSection;