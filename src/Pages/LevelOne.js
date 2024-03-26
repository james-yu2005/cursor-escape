// LevelOne.jsx
import React from 'react';
import GameCanvas from './GameCanvas'; // Adjust the import path as needed
import levelOneImage from '../assets/Level1.png'; // Make sure the path is correct


const LevelOne = ()  => {

    return (
        <>
            <GameCanvas 
                levelImage={levelOneImage} 
                initialPosition={{ x: 50, y: 50 }} 
                nextLevel="/level2" 
            />
        </>
    );
}

export default LevelOne;
