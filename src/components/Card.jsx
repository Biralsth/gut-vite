import React from 'react'

const Card = (props) => {

    console.log(props.dog)
    return (
        <div>
            <h1 className='text-4xl text-center'>Username is {props.dog} </h1>
        </div>
    )
}

export default Card