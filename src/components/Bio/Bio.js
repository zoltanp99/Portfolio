import React from 'react'
import './Bio.css'
import ImageContainer from '../ImageContainer/ImageContainer'
import ParagraphContainer from '../ParagraphContainer/ParagraphContainer'
import headshot from '../../Files/black-lotus.png'
import resume from '../../Files/Zoltan Pastor.pdf'

const Bio = (props) => {

    const paragraphs = props.paragraphs.map(element => {
        return <ParagraphContainer paragraphTitle={element.title} paragraphContent={element.content}/>
        });

        const formatIntoLink = (link) => {
            const words = link.split('/');
            console.log(words);
            const linkName = words[words.length];
            return <a href={link} >{linkName}</a>;
          }

    return (
        <div className="bioWrapper">
            <ImageContainer imageSource={headshot} alt='headshot'/>
            <div className="bioTextContainer">
                {paragraphs}
                <a href={resume} target>Zoltan&nbsp;Pastor.pdf</a>
            </div>
        </div>
    )
}

export default Bio
