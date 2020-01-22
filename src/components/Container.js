import React, {useState, useEffect} from "react";
import axios from 'axios';
import Image from './Image';
import AboutImage from './AboutImage';

export default function Container() {
    const [picture, setPicture] = useState([]);
    useEffect(() => {
        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=j2uzBA8LinjehEH4kPxsobNzT0asdVSAbgJx8Ztc')
            .then(response => {
                console.log(response.data);
                setPicture(response.data);
            })
            .catch(err => {
                console.log("The data was not returned", err);
            })
    }, []);
    return (
        <div className='container'>
            <Image picture={picture}/>
            <AboutImage picture={picture}/>
        </div>
    )
}