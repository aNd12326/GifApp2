import React from 'react'
import '../index.css'

export const GifGridItem = ({id,title,url}) => {
    // console.log(props.img)
    // console.log({id,title,url})
    return (
        <div className='card animate__animated animate__fadeIn'>
            {/* <h1>{title}</h1> */}
            <img src={url} alt='img not found'/>
            <p>{id}</p>
        </div>
    )
}
