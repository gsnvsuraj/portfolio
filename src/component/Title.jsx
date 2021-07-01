import React from 'react';
import '../styles/Common.css';

const Title = (props) => {
    return (
        <div className="titleBody">
            <div className="titleHead">
                <h1 className="title">
                    { props.title }
                </h1>
            </div>
        </div>
    );
}
 
export default Title;