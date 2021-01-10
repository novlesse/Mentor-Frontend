import React from 'react'

function CategoryBox(props) {
    return (
        <div>
            <a href='/' className='category-container'>
                
                <h1>{props.name}</h1>
            </a>
        </div>
    )
}

export default CategoryBox
