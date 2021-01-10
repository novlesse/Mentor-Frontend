import React from 'react'
import {Jumbotron, Row, Col, Image} from 'react-bootstrap';
const MainSectionThree = () => {
    return (
        <Jumbotron fluid >
           <Row>
				<Col className="d-flex justify-content-end">
					<Image className="imageBox" />
                    Image Here
				</Col>
                <Col>
                    <Row><h2>Have a space to rent out?</h2></Row>
					<Row><h4>Email to let us know</h4></Row>
				</Col>
			</Row>
            
      

        </Jumbotron>
    )
}

export default MainSectionThree;