import React from 'react'
import Ex2 from './ex2'

const Ex = (props) => {
    return (
        <div>I am Ex
            {props.Ex}

            <Ex2 />
        </div>
    )
}

export default Ex