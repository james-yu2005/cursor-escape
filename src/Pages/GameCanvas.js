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
            default:
                console.log('Congratulations, you have completed all levels!');
                // Navigate to nextLevel or another route as appropriate
                navigate(nextLevel);
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
        // Draw level two elements
        // Example:
        ctx.fillStyle = 'blue';
        ctx.fillRect(50, 50, 100, 100); // Example obstacle
        ctx.fillStyle = 'green';
        ctx.fillRect(250, 250, 50, 50); // Goal
    };

    // Define drawLevelThree to draw level three elements
    const drawLevelThree = (ctx) => {
        // Draw level three elements
        // Example:
        ctx.fillStyle = 'orange';
        ctx.fillRect(100, 100, 150, 150); // Example obstacle
        ctx.fillStyle = 'green';
        ctx.fillRect(400, 400, 50, 50); // Goal
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

        // Calculate direction and magnitude of movement
        const dirX = mouseX - cursorPos.x;
        const dirY = mouseY - cursorPos.y;
        const magnitude = Math.sqrt(dirX ** 2 + dirY ** 2);
        const normalizedDirX = magnitude ? dirX / magnitude : 0;
        const normalizedDirY = magnitude ? dirY / magnitude : 0;

        // Determine next potential position
        const stepSize = 8; // Controls cursor movement "speed"
        const nextPosX = cursorPos.x + normalizedDirX * stepSize;
        const nextPosY = cursorPos.y + normalizedDirY * stepSize;

        if (isPositionValid(canvas, nextPosX, nextPosY)) {
            setCursorPos({ x: nextPosX, y: nextPosY });
        }
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
