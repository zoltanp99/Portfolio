import React from 'react'
import './Bio.css'
import ImageContainer from '../ImageContainer/ImageContainer'
import headshot from '../../Images/black-lotus.png'

const Bio = () => {
    return (
        <div className="bioWrapper">
            <ImageContainer imageSource={headshot} alt='headshot'/>
            <div className="bioTextContainer">
                this is where the bio text will stay
            </div>
        </div>
    )
}

export default Bio
