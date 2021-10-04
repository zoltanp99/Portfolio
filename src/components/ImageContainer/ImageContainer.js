import React from 'react'
import './ImageContainer.css'

const ImageContainer = (props) => {
    return (
        <div className='imageWrapper'>
            <img className='image' src={props.imageSource} alt={props.alt} />
        </div>
    )
}

export default ImageContainer
