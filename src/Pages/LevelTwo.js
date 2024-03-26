import GameCanvas from './GameCanvas'; // Adjust the import path as needed
import levelTwoImage from '../assets/Level2.png'; // Make sure the path is correct
import React from 'react';

function LevelTwo({username}) {
    return (
        <>
            <div>
                <h1 class="mt-8 text-center">Welcome, {username}!</h1>
            </div>
        <GameCanvas 
            levelImage={levelTwoImage} 
            initialPosition={{ x: 50, y: 50 }} 
            nextLevel="/level3" // Adjust for your next level or end scene
        />
        </>
    );
}

export default LevelTwo;
