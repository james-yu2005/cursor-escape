import GameCanvas from './GameCanvas'; // Adjust the import path as needed
import levelTwoImage from '../assets/Level2.png'; // Make sure the path is correct

function LevelTwo() {
    return (
        <GameCanvas 
            levelImage={levelTwoImage} 
            initialPosition={{ x: 50, y: 50 }} 
            nextLevel="/level3" // Adjust for your next level or end scene
        />
    );
}

export default LevelTwo;
