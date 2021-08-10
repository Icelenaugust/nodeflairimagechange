import React from 'react';
import { useState } from 'react';

const Navbar = ({ 
    onChangeMountain,
    onChangeBeaches,
    onChangeBirds,
    onChangeFood
 }) => {
    
    return (
        <nav>
            <button onClick = { onChangeMountain }>Mountain</button>
            <button onClick = { onChangeBeaches }>Beaches</button>
            <button onClick = { onChangeBirds }>Birds</button>
            <button onClick = { onChangeFood }>Food</button>
        </nav>
    );
}

export default Navbar