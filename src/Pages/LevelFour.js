// LevelOne.jsx
import React from 'react';
import GameCanvas from './GameCanvas'; // Adjust the import path as needed
import levelFourImage from '../assets/Level4.png'; // Make sure the path is correct

const LevelOne = ()  => {
    return (
        <>
            <GameCanvas 
                levelImage={levelFourImage} 
                initialPosition={{ x: 50, y: 50 }} 
                nextLevel="/EndPage" 
            />
        </>
    );
}

export default LevelOne;
