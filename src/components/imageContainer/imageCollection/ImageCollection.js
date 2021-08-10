import React from 'react';
import { useState } from 'react';
import './ImageCollection.css';



const ImageCollection = ( { pictures }) => {
    
    return(
        <div className="image-collection">            
            {pictures.map((picture) => 
                <img key={picture.id}  className="picture" src={ picture }></img>
            )}
        </div>
    )
}

export default ImageCollection;