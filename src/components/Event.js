import React from 'react'

function Event(props) {
    console.log('fom event')
    return (
        <div className='event-component-container'>            
            <img className='event-component-image-content' src='https://images.unsplash.com/photo-1553520077-205eb37650fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'/>

            <div className='description-container'>
                <h5>{props.name}</h5>
                <p>{props.date.split('T')[0]}</p>
            </div>
        </div>
    )
}

export default Event
