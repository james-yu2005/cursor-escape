import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './GameCanvas.css'; // Ensure this CSS file sets the canvas cursor to 'none'

function GameCanvas({ levelImage, nextLevel, initialPosition = { x: 25, y: 25 } }) {
    const [level, setLevel] = useState(1);
    const [cursorPos, setCursorPos] = useState(initialPosition);
    const canvasRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        // Consider adding image loading logic here if levelImage is used
        drawGameBoard(context); // Initial draw
        const handleMouseMove = (e) => updateCursorPos(e);
        document.addEventListener('mousemove', handleMouseMove);
        return () => document.removeEventListener('mousemove', handleMouseMove);
    }, [level, cursorPos]);
    

    const drawGameBoard = (ctx) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        // Add logic here to draw levelImage if necessary
        switch (level) {
            case 1:
                drawLevelOne(ctx);
                break;
            case 2:
                drawLevelTwo(ctx);
                break;
            case 3:
                drawLevelThree(ctx);
                break;
            case 4:
                drawLevelFour(ctx);
                break;
            case 5:
                drawLevelFive(ctx);
                break;
            case 6:
                drawLevelSix(ctx);
                break;
            case 7:
                drawLevelSeven(ctx);
                break;
            case 8:
                drawLevelEight(ctx);
                break;
            case 9:
                <h1>congrats!</h1>
            default:
                <h1>Congrats!</h1>
        }
        drawTemporaryCursor(ctx); // Draw cursor at its current position
    };

    const drawLevelOne = (ctx) => {
        ctx.fillStyle = 'black';
        ctx.fillRect(50, 50, 200, 10); // Obstacle
        ctx.fillStyle = 'green';
        ctx.fillRect(250, 150, 50, 50); // Goal
    };

    const drawLevelTwo = (ctx) => {
        ctx.fillStyle = 'black';

        // Horizontal walls
        ctx.fillRect(200, 100, 100, 10);
        ctx.fillRect(100, 150, 100, 10);
        ctx.fillRect(300, 150, 100, 10);
        ctx.fillRect(200, 200, 100, 10);

        // Vertical walls
        ctx.fillRect(100, 100, 10, 200);
        ctx.fillRect(150, 100, 10, 50);
        ctx.fillRect(150, 200, 10, 50);
        ctx.fillRect(400, 100, 10, 200);

        // Draw the green box (goal)
        ctx.fillStyle = 'green';
        ctx.fillRect(500, 500, 50, 50);
    };

    // Define drawLevelThree to draw level three elements
    const drawLevelThree = (ctx) => {
        ctx.fillStyle = 'black';

        // Horizontal walls
        ctx.fillRect(450, 450, 200, 10);
        ctx.fillRect(250, 550, 200, 10);
        ctx.fillRect(150, 650, 200, 10);
        ctx.fillRect(450, 750, 200, 10);

        // Vertical walls
        ctx.fillRect(450, 450, 10, 300);
        ctx.fillRect(250, 550, 10, 200);
        ctx.fillRect(350, 650, 10, 200);
        ctx.fillRect(650, 550, 10, 200);
        ctx.fillRect(550, 450, 10, 300);
        ctx.fillRect(150, 650, 10, 100);
        ctx.fillRect(350, 750, 10, 100);
        ctx.fillRect(650, 750, 10, 100);

        ctx.fillStyle = 'green';
        ctx.fillRect(2, 500, 50, 50);
    };
    // Define drawLevelFour to draw level four elements (Maze)
const drawLevelFour = (ctx) => {
    // Draw maze walls
    ctx.fillStyle = 'black';
    ctx.fillRect(50, 50, 300, 20); // Maze wall
    ctx.fillRect(100, 100, 20, 200); // Maze wall
    // Add more maze walls or obstacles to increase difficulty

    // Draw green box (goal)
    ctx.fillStyle = 'green';
    ctx.fillRect(350, 350, 50, 50); // Green box (goal)
};

// Define drawLevelFive to draw level five elements
const drawLevelFive = (ctx) => {
    // Draw obstacles
    ctx.fillStyle = 'black';
    ctx.fillRect(50, 50, 200, 20); // Obstacle
    ctx.fillRect(300, 300, 20, 200); // Obstacle
    // Add more obstacles or maze walls to increase difficulty

    // Draw green box (goal)
    ctx.fillStyle = 'green';
    ctx.fillRect(500, 500, 50, 50); // Green box (goal)
};

// Define drawLevelSix to draw level six elements
const drawLevelSix = (ctx) => {
    // Draw obstacles
    ctx.fillStyle = 'black';
    ctx.fillRect(50, 50, 100, 100); // Obstacle
    ctx.fillRect(300, 300, 200, 20); // Obstacle
    // Add more complex obstacles or maze layouts to increase difficulty

    // Draw green box (goal)
    ctx.fillStyle = 'green';
    ctx.fillRect(600, 400, 50, 50); // Green box (goal)
};

// Define drawLevelSeven to draw level seven elements
const drawLevelSeven = (ctx) => {
    // Draw obstacles
    ctx.fillStyle = 'black';
    ctx.fillRect(100, 100, 200, 50); // Obstacle
    ctx.fillRect(400, 200, 50, 200); // Obstacle
    // Add more challenging obstacles or maze layouts

    // Draw green box (goal)
    ctx.fillStyle = 'green';
    ctx.fillRect(700, 200, 50, 50); // Green box (goal)
};

// Define drawLevelEight to draw level eight elements
const drawLevelEight = (ctx) => {
    // Draw obstacles
    ctx.fillStyle = 'black';
    ctx.fillRect(200, 100, 100, 300); // Obstacle
    ctx.fillRect(400, 200, 200, 100); // Obstacle
    // Increase the complexity of obstacles or maze layouts

    // Draw green box (goal)
    ctx.fillStyle = 'green';
    ctx.fillRect(750, 300, 50, 50); // Green box (goal)
};



    const drawTemporaryCursor = (ctx) => {
        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.arc(cursorPos.x, cursorPos.y, 5, 0, 2 * Math.PI);
        ctx.fill();
    };

    const updateCursorPos = (e) => {
        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const boxLeft = 0;
        const boxTop = 0;
        const boxRight = 800; // Adjust as needed
        const boxBottom = 600; // Adjust as needed
        let nextPosX = mouseX;
        let nextPosY = mouseY;
        
        // Constrain the cursor's position within the box boundaries
        if (nextPosX < boxLeft) {
            nextPosX = boxLeft;
        } else if (nextPosX > boxRight) {
            nextPosX = boxRight;
        }
    
        if (nextPosY < boxTop) {
            nextPosY = boxTop;
        } else if (nextPosY > boxBottom) {
            nextPosY = boxBottom;
        }
    
        // Calculate direction and magnitude of movement
        const dirX = nextPosX - cursorPos.x;
        const dirY = nextPosY - cursorPos.y;
        const stepSize = 8; // Controls cursor movement "speed"
        const magnitude = Math.sqrt(dirX ** 2 + dirY ** 2);
        const normalizedDirX = magnitude ? dirX / magnitude : 0;
        const normalizedDirY = magnitude ? dirY / magnitude : 0;
    
        // Determine next potential position
        const potentialNextPosX = cursorPos.x + normalizedDirX * stepSize;
        const potentialNextPosY = cursorPos.y + normalizedDirY * stepSize;
    
        // Check if the potential next position overlaps with black barriers
        if (!isPositionValid(canvas, potentialNextPosX, potentialNextPosY)) {
            return; // Stop further movement if the next position is invalid
        }
    
        // Update cursor position state after constraining it within boundaries
        setCursorPos({ x: nextPosX, y: nextPosY });
    };
    
    

    const isPositionValid = (canvas, x, y) => {
        const ctx = canvas.getContext('2d');
        // Check a slightly larger area around the dot for robust collision detection
        const imageData = ctx.getImageData(x - 5, y - 5, 10, 10).data;
        for (let i = 0; i < imageData.length; i += 4) {
            const isBlack = imageData[i] === 0 && imageData[i + 1] === 0 && imageData[i + 2] === 0 && imageData[i + 3] === 255;
            const isGreen = imageData[i] === 0 && imageData[i + 1] === 128 && imageData[i + 2] === 0 && imageData[i + 3] === 255;

            if (isBlack) {
                console.log('Collision with a black obstacle.');
                return false;
            }
            if (isGreen) {
                console.log('Reached the green goal!');
                setLevel(prevLevel => prevLevel + 1);
                return false; // To prevent further movement after reaching a goal
            }
        }
        return true; // Allow movement if no collision detected
    };
    

    return <canvas ref={canvasRef} width={800} height={600} className="canvasGameBoard"></canvas>;
}

export default GameCanvas;
