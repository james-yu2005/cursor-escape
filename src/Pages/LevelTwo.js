// LevelTwo.js
import GameCanvas from './GameCanvas';
import levelTwoImage from '../assets/Level2.png';

function LevelTwo() {
    return (
        <GameCanvas 
            levelImage={levelTwoImage} 
            initialPosition={{ x: 50, y: 50 }} 
            nextLevel="/level3" // Assume there's a third level; adjust as needed
        />
    );
}

export default LevelTwo