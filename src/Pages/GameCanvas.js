import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './GameCanvas.css'; // Ensure this CSS file sets the canvas cursor to 'none'


function GameCanvas({ levelImage, nextLevel, initialPosition = { x: 25, y: 25 } }) {
    const [level, setLevel] = useState(1);
    const [cursorPos, setCursorPos] = useState(initialPosition);
    const canvasRef = useRef(null);
    const navigate = useNavigate();
    const [gameCompleted, setGameCompleted] = useState(false); // State to track game completion

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        // Consider adding image loading logic here if levelImage is used
        drawGameBoard(context); // Initial draw
        
        const handleMouseMove = (e) => updateCursorPos(e);
        document.addEventListener('mousemove', handleMouseMove);
        return () => document.removeEventListener('mousemove', handleMouseMove);
    }, [level, cursorPos]);
    
    useEffect(() => {
        if (level === 6) {
            setGameCompleted(true);
        }
    }, [level]);

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
            default:
                drawEndingPage(ctx);
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
        // Draw obstacles
        ctx.fillStyle = 'black';
    
        // Horizontal walls
        ctx.fillRect(100, 100, 200, 10);
        ctx.fillRect(100, 200, 200, 10);
        ctx.fillRect(100, 300, 200, 10);
        ctx.fillRect(100, 400, 200, 10);
        ctx.fillRect(100, 500, 200, 10);
        ctx.fillRect(100, 600, 200, 10);
        ctx.fillRect(100, 700, 200, 10);
    
        // Vertical walls
        ctx.fillRect(100, 100, 10, 600);
        ctx.fillRect(300, 100, 10, 600);
        ctx.fillRect(350, 100, 10, 600);
        ctx.fillRect(720, 100, 10, 600);
    
        // Draw the green box (goal)
        ctx.fillStyle = 'green';
        ctx.fillRect(0, 500, 50, 50); // Goal
    };
    // Define drawLevelFour to draw level four elements (Maze)
    const drawLevelFour = (ctx) => {
        // Draw maze walls
        ctx.fillStyle = 'black';
    
        // Vertical walls
       
        ctx.fillRect(350, 0, 10, 500); // Middle left wall
        ctx.fillRect(400, 100, 10, 400); // Middle right wall
        ctx.fillRect(750, 0, 10, 600); // Right wall
    
        // Horizontal walls
        ctx.fillRect(0, 0, 800, 10); // Top wall
        ctx.fillRect(0, 0, 300, 10); // Top left wall
        ctx.fillRect(400, 0, 400, 10); // Top right wall
        ctx.fillRect(0, 550, 800, 10); // Bottom wall
        ctx.fillRect(0, 200, 300, 10); // Middle top wall
        ctx.fillRect(400, 250, 400, 10); // Middle bottom wall
    
        // Draw green box (goal)
        ctx.fillStyle = 'green';
        ctx.fillRect(500, 60, 50, 50); // Green box (goal)
    };
    

// Define drawLevelFive to draw level five elements
const drawLevelFive = (ctx) => {
    // Draw maze walls
    ctx.fillStyle = 'black';

    // Vertical walls
   
    // Inner maze walls
    ctx.fillRect(100, 100, 600, 10);
    ctx.fillRect(100, 200, 600, 10);
    ctx.fillRect(100, 300, 600, 10);
    ctx.fillRect(100, 400, 600, 10);

    ctx.fillRect(100, 100, 10, 400);
    ctx.fillRect(290, 100, 10, 400);
    ctx.fillRect(490, 100, 10, 400);
    ctx.fillRect(690, 100, 10, 400);

    // Draw green block (goal)
    ctx.fillStyle = 'green';
    ctx.fillRect(300,450, 50, 50);
};


// Define drawLevelSix to draw level six elements
const drawLevelSix = (ctx) => {
    // Draw maze walls
    

    // Draw green block (goal)
    ctx.fillStyle = 'green';
    ctx.fillRect(500, 450, 50, 50);
};


const drawEndingPage = (ctx) => {
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    ctx.fillStyle = 'purple';
    ctx.font = '24px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Congratulations, you beat the game!', ctx.canvas.width / 2, ctx.canvas.height / 2 - 30);
    ctx.fillText('More levels coming soon!', ctx.canvas.width / 2, ctx.canvas.height / 2 + 10);
    

    
};

    const drawTemporaryCursor = (ctx) => {
        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.arc(cursorPos.x, cursorPos.y, 5, 0, 2 * Math.PI);
        ctx.fill();
    };
    let lastUpdate = 0;
    const throttleDelay = 200; // Adjust this value as needed
    
    const updateCursorPos = (e) => {
        const now = Date.now();
        if (now - lastUpdate < throttleDelay) {
            return; // Throttle movement
        }
        lastUpdate = now;

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
        const imageData = ctx.getImageData(x - 1, y - 1, 3, 3).data; // Check a 3x3 area around the cursor
    
        // Iterate through the pixels in the 3x3 area
        for (let i = 0; i < imageData.length; i += 4) {
            const pixelColor = imageData.slice(i, i + 4);
            const isBlack = pixelColor[0] === 0 && pixelColor[1] === 0 && pixelColor[2] === 0 && pixelColor[3] === 255;
            const isGreen = pixelColor[0] === 0 && pixelColor[1] === 128 && pixelColor[2] === 0 && pixelColor[3] === 255;
    
            if (isBlack) {
                // Collision with a black obstacle
                return false;
            }
            if (isGreen) {
                // Reached the green goal
                setLevel(prevLevel => prevLevel + 1);
                return false; // To prevent further movement after reaching a goal
            }
        }
        return true; // Allow movement if no collision detected
    };
    
    return <canvas ref={canvasRef} width={800} height={600} className="canvasGameBoard"></canvas>;
}

export default GameCanvas;
