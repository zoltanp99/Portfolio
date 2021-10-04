import React from 'react';
import './ContentBlock.css';
import AnimateHeight from 'react-animate-height';

const ContentBlock = (props) => {

    const [contentHeight, setContentHeight] = React.useState(0);

    const handleClick = () => {
        const height = contentHeight;
        setContentHeight(height === 0 ? 'auto' : 0);
    }


    return (
        <div className='contentBlockWrapper'>
            <div className='header' onClick = {() => handleClick()}>
                {props.headerTitle}
            </div>
            <AnimateHeight className='content' id='contentBlock' height={contentHeight}>
                <div style={{padding: '5px'}}>
                    {props.content}
                </div>  
            </AnimateHeight>
        </div>
    )
}

export default ContentBlock
