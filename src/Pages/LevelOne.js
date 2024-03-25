// LevelOne.js
import GameCanvas from './GameCanvas';
import levelOneImage from '../assets/Level1.png';

function LevelOne() {
    return (
        <GameCanvas 
            levelImage={levelOneImage} 
            initialPosition={{ x: 50, y: 50 }} 
            nextLevel="/level2" 
        />
    );
}
export default LevelOne
