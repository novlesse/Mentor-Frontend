import React, { useEffect, useState } from "react";
import Axios from 'axios';
import CategoryBox from '../components/CategoryBox';
import { Container, Row, Col } from 'react-bootstrap'

export default function Workshops(props) {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    document.title = "Workshops";
    Axios.get(`http://localhost:3333/category/all`)
        .then((res)=>{
            const allCategories = res.data;

            for (let i = 0 ;i < allCategories.length; i++) {
              setCategories(categories => [...categories, allCategories[i]]) 
            }


        })
  }, []);
  
  return (
    <div>
      <div className='workshop-category-container'>
        <Container fluid >
          <Row className="justify-content-md-center workshop-category-row">
            {categories.map((category)=>
                <Col lg={3} sm={2}><CategoryBox key={category._id} name={category.name} description={category.description} tags={category.tags} /></Col>
            )} 
          </Row>
        </Container>
      </div>
    </div>
  
  )
}
