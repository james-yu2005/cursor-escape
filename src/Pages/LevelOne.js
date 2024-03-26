// LevelOne.jsx
import React from 'react';
import GameCanvas from './GameCanvas'; // Adjust the import path as needed
import levelOneImage from '../assets/Level1.png'; // Make sure the path is correct

const LevelOne = ({ username })  => {
    return (
        <>
            <div>
                <h1 class="mt-8 text-center">Welcome, {username}!</h1>
            </div>
            <GameCanvas 
                levelImage={levelOneImage} 
                initialPosition={{ x: 50, y: 50 }} 
                nextLevel="/level2" 
            />
        </>
    );
}

export default LevelOne;
