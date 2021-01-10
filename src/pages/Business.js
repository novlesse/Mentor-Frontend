import React, { useEffect, useState } from 'react'
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
            return (<Event key={event._id} date={event.start_time} name={event.name} /> )
        })

        return allevents;
    };

   

    return (
        <div>
            <h1>Business: { businessName }</h1>
            {/* <p>{pastEvents[0]['name']}</p>
            <p>{pastEvents[0]['start_time']}</p> */}
            {/* {pastEvents.map((event)=>
                <Event key={event._id} date={event.start_time} name={event.name} />
            )} */}
            <h5>Upcoming Events</h5>
            {loopEventComponent(upcomingEvents)}
            <h5>Past Events</h5>
            {loopEventComponent(pastEvents)}
           
        </div>
    )
}

export default Business
