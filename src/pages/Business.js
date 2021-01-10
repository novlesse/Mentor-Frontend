import React, { useEffect, useState } from 'react'
import { Row, Col, Container } from "react-bootstrap";
import Axios from 'axios';
import Event from '../components/Event';

function Business(props) {

    const [ businessName, setBusinessName ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ rating, setRating ] = useState('');
    const [ upcomingEvents, setUpcomingEvents ] = useState([]);
    const [ pastEvents, setPastEvents ] = useState([]);

    useEffect(() => {
        document.title = "Browse";
            // props.businessID 
        Axios.get(`http://localhost:3333/business/${'5ffa93cd2efb4d6f9f447826'}`)
        .then((res)=>{
            const details = res.data;
            console.log(details);
            setBusinessName(details.name);
            setDescription(details.description);
        })
        .then((res)=>{
            Axios.get(`http://localhost:3333/workshop/business/${'5ffa93cd2efb4d6f9f447826'}`)
            .then((res)=>{
                const dbWorkshops = res.data.data;
                console.log(dbWorkshops)
                const now = new Date().toISOString();
                
                for (let i = 0 ;i < dbWorkshops.length; i++) {
                    if (dbWorkshops[i].start_time > now){
                        setUpcomingEvents(upcomingEvents => [...upcomingEvents, dbWorkshops[i]])
                    }else{
                        setPastEvents(pastEvents => [...pastEvents, dbWorkshops[i]])
                    } 
                }
            })
        })
        console.log(pastEvents);
    
      }, []);
    
    const loopEventComponent = (events) => {
        console.log('from loopeventcomponent')
        console.log(events);
        let allevents = events.map((event) => {
            console.log(event);
            return (<Col sm={3}>
                        <Event 
                            key={event._id} 
                            date={event.start_time} 
                            name={event.name} /> 
                    </Col> )
        })
        return allevents; 
    };

   

    return (
        <div>
            <div className="business-header-container">
                <h1>{ businessName }</h1>
            </div>
            <div className="business-info-container">

                <img className="business-info-image" src="https://images.unsplash.com/photo-1553520077-205eb37650fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"/>
                <div className="info-text">
                    <h5>{ businessName }</h5>
                    <p>{description}</p>
                </div>
            </div>
            {/* <p>{pastEvents[0]['name']}</p>
            <p>{pastEvents[0]['start_time']}</p> */}
            {/* {pastEvents.map((event)=>
                <Event key={event._id} date={event.start_time} name={event.name} />
            )} */}
            <Container>
                <h5 className='business-event-title'>Upcoming Events</h5>
                <Row>
                    {loopEventComponent(upcomingEvents)} 
                </Row>
                <h5 className='business-event-title'>Past Events</h5>
                <Row>
                    {loopEventComponent(pastEvents)}
                </Row>
            </Container>
           
        </div>
    )
}

export default Business
