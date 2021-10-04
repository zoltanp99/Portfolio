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
            <AnimateHeight className='contentAppear' id='contentBlock' height={contentHeight}>
                <div>
                    {props.content}
                </div>  
            </AnimateHeight>
        </div>
    )
}

export default ContentBlock
