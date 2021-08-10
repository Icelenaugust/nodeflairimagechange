import React from 'react';
import { useState } from 'react';
import ImageCollection from './imageCollection/ImageCollection';
import './ImageContainer.css';

const ImageContainer = ({ theme, pictures }) => {
    
    return(
        <div className="image-container">
            <h1>{ theme }</h1>
            <ImageCollection pictures = { pictures }></ImageCollection>
        </div>
    )
}

export default ImageContainer;