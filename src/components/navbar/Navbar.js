import React from 'react';
import { useState } from 'react';
import './Navbar.css';

const Navbar = ({ 
    onChangeMountain,
    onChangeBeaches,
    onChangeBirds,
    onChangeFood
 }) => {
    
    return (
        <div className="nav-bar">
            <nav>
                <button onClick = { onChangeMountain }>Mountain</button>
                <button onClick = { onChangeBeaches }>Beaches</button>
                <button onClick = { onChangeBirds }>Birds</button>
                <button onClick = { onChangeFood }>Food</button>
            </nav>
        </div>
    );
}

export default Navbar