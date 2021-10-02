import React from 'react'
import './ContentBlock.css'

const ContentBlock = (props) => {
    return (
        <div className='contentBlockWrapper'>
            <div className='header'>
                {props.headerTitle}
            </div>
            <div className='blockHeader'>
                {props.content}
            </div>
        </div>
    )
}

export default ContentBlock
