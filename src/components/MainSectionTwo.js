import React from 'react';
import { Jumbotron, Row, Col, Image } from 'react-bootstrap';
import {MainSectionContainerTwo, ImageBox, SubtitleBox, TitleBoxTwo} from './elements'

const MainSectionTwo = (props) => {
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
					<Image src={props.img} alt={props.alt}/>
					
				</Col>
			</Row>
		</MainSectionContainerTwo>
	);
};

export default MainSectionTwo;
