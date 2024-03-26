import GameCanvas from './GameCanvas'; // Adjust the import path as needed
import levelThreeImage from '../assets/Level3.png'; // Make sure the path is correct
import React from 'react';

function LevelThree({ username }) {
    return (
        <>
            <div>
                <h1 class="mt-8 text-center">Welcome, {username}!</h1>
            </div>
        <GameCanvas 
            levelImage={levelThreeImage} 
            initialPosition={{ x: 50, y: 50 }} 
            nextLevel="/level4" // Adjust for your next level or end scene
        />
        </>

    );
}

export default LevelThree;
