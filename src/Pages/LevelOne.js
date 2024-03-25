import GameCanvas from './GameCanvas'; // Adjust the import path as needed
import levelOneImage from '../assets/level1.png'; // Make sure the path is correct

function LevelOne() {
    return (
        <GameCanvas 
            levelImage={levelOneImage} 
            initialPosition={{ x: 50, y: 50 }} 
            nextLevel="/level2" // Adjust as necessary for your routing structure
        />
    );
}

export default LevelOne;
