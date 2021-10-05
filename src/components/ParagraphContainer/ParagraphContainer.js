import React from 'react'
import './ParagraphContainer.css'

const ParagraphContainer = (props) => {
    console.log('this is the props sent throught o the individual paragraphs', props);
    return (
        <div className='paragraphWrapper'>
            <b className='boldText'>{props.paragraphTitle}</b>&nbsp;—&nbsp;{props.paragraphContent}
        </div>
    )
}

export default ParagraphContainer
