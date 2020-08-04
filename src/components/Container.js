import React, {useState, useEffect} from "react";
import axios from 'axios';
import Image from './Image';
import AboutImage from './AboutImage';
import styled from 'styled-components';

const Wrapper = styled.div`
    box-sizing: border-box;
    padding: 0 5%;
    width: 100%;
    background: dimgray;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
`

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
        <Wrapper>
            <Image picture={picture}/>
            <AboutImage picture={picture}/>
        </Wrapper>
    )
}