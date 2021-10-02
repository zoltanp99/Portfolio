import React from 'react';
import  './ContentBlock.css';

const ContentBlock = (props) => {

    const [contentEnabled, setContentEnabled] = React.useState(false);
    
    const handleClick = () => {
        setContentEnabled(!contentEnabled);
        console.log('it happened');
        console.log(contentEnabled);
    }


    return (
        <div className='contentBlockWrapper'>
            <div className='header' onClick = {() => handleClick()}>
                {props.headerTitle}
            </div>
            <div className={contentEnabled ? 'contentAppear' : 'contentDisappear'}>
                {props.content}
            </div>  
        </div>
    )
}

export default ContentBlock
