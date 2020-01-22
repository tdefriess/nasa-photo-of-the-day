import React from 'react';

export default function AboutImage(props) {
    return (
        <div className='description-box'>
            <h4>{props.picture.title}</h4>
            <h6>Date: {props.picture.date}</h6>
            <p>Description: {props.picture.explanation}</p>
        </div>
    )
}