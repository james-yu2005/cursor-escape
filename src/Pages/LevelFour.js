// LevelOne.jsx
import React from 'react';
import GameCanvas from './GameCanvas'; // Adjust the import path as needed
import levelFourImage from '../assets/Level4.png'; // Make sure the path is correct

const LevelOne = ({ username })  => {
    return (
        <>
            <div>
                <h1 class="mt-8 text-center">Welcome, {username}!</h1>
            </div>
            <GameCanvas 
                levelImage={levelFourImage} 
                initialPosition={{ x: 50, y: 50 }} 
                nextLevel="/level5" 
            />
        </>
    );
}

export default LevelOne;
