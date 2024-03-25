import GameCanvas from './GameCanvas'; // Adjust the import path as needed
import levelThreeImage from '../assets/Level3.png'; // Make sure the path is correct

function LevelThree() {
    return (
        <GameCanvas 
            levelImage={levelThreeImage} 
            initialPosition={{ x: 50, y: 50 }} 
            nextLevel="/level4" // Adjust for your next level or end scene
        />
    );
}

export default LevelThree;
