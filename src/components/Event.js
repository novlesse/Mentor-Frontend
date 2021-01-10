import React from 'react'

function Event(props) {
    console.log('fom event')
    return (
        <div>
            <h1>{props.name}</h1>
            <h5>{props.date}</h5>
        </div>
    )
}

export default Event
