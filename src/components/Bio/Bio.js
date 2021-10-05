import React from 'react'
import './Bio.css'
import ImageContainer from '../ImageContainer/ImageContainer'
import ParagraphContainer from '../ParagraphContainer/ParagraphContainer'
import headshot from '../../Images/black-lotus.png'

const Bio = (props) => {

    const paragraphs = props.paragraphs.map(element => {
        return <ParagraphContainer paragraphTitle={element.title} paragraphContent={element.content}/>
        });


    return (
        <div className="bioWrapper">
            <ImageContainer imageSource={headshot} alt='headshot'/>
            <div className="bioTextContainer">
                {paragraphs}
            </div>
        </div>
    )
}

export default Bio
