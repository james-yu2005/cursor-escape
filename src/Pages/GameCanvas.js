import React, { useRef, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './GameCanvas.css'; // Ensure this CSS file sets the canvas cursor to 'none'


function GameCanvas({ levelImage, nextLevel, initialPosition = { x: 25, y: 25 } }) {
    const [level, setLevel] = useState(1);
    const [cursorPos, setCursorPos] = useState(initialPosition);
    const canvasRef = useRef(null);
    const navigate = useNavigate();
    const [elapsedTime, setElapsedTime] = useState(0)
    const [gameCompleted, setGameCompleted] = useState(false); // State to track game completion

    const location = useLocation(); // Get the location object
    const cursorImageSrc = location.state?.cursor || '/path/default-cursor.png'; // Path to default cursor if none selected
    const cursorImage = new Image();
    cursorImage.src = cursorImageSrc;

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
        let timer; // Variable to store timer interval
        if (!gameCompleted) {
            // Start the timer when the game is not completed
            timer = setInterval(() => {
                setElapsedTime(prevTime => prevTime + 1); // Increment elapsed time every second
            }, 1000);
        }
        return () => clearInterval(timer); // Cleanup on component unmount
    }, [gameCompleted]);
    
    useEffect(() => {
        if (level === 10) {
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
                break;
            case 7:
                drawLevelSeven(ctx);
                break;
            case 8:
                drawLevelEight(ctx);
                break;
            case 9:
                drawLevelNine(ctx);
                break;
            case 10:
                drawLevelTen(ctx);
                break;
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

    ctx.fillRect(690, 100, 10, 400);

    // Draw green block (goal)
    ctx.fillStyle = 'green';
    ctx.fillRect(300,450, 50, 50);
};


// Define drawLevelSix to draw level six elements
const drawLevelSix = (ctx) => {
    // Draw maze walls
    ctx.fillStyle = 'black';

    // Vertical walls
    ctx.fillRect(200, 0, 10, 400);
    ctx.fillRect(400, 0, 10, 400);
    ctx.fillRect(600, 0, 10, 400);

    // Horizontal walls
    ctx.fillRect(100, 100, 200, 10);
    ctx.fillRect(400, 100, 200, 10);
    ctx.fillRect(100, 300, 600, 10);

    // Draw green block (goal)
    ctx.fillStyle = 'green';
    ctx.fillRect(700, 350, 50, 50);
};

const drawLevelSeven = (ctx) => {
    // Draw maze walls
    ctx.fillStyle = 'black';

    // Vertical walls
    ctx.fillRect(150, 0, 10, 500);
    ctx.fillRect(300, 100, 10, 400);
    ctx.fillRect(450, 0, 10, 500);

    // Horizontal walls
    ctx.fillRect(0, 200, 400, 10);
    ctx.fillRect(500, 200, 300, 10);
 

    // Draw green block (goal)
    ctx.fillStyle = 'green';
    ctx.fillRect(700, 0, 50, 50);
};

const drawLevelEight = (ctx) => {
    // Draw maze walls
    ctx.fillStyle = 'black';

    // Vertical walls
    ctx.fillRect(150, 0, 10, 600);
    ctx.fillRect(300, 0, 10, 300);
    ctx.fillRect(450, 100, 10, 500);

    // Horizontal walls
    ctx.fillRect(0, 200, 400, 10);
    ctx.fillRect(500, 200, 300, 10);
    ctx.fillRect(0, 400, 800, 10);

    // Draw green block (goal)
    ctx.fillStyle = 'green';
    ctx.fillRect(700, 350, 50, 50);
};

const drawLevelNine = (ctx) => {
    // Draw maze walls
    ctx.fillStyle = 'black';

    // Vertical walls
    ctx.fillRect(130, 30, 10, 400);
    ctx.fillRect(450, 0, 10, 400);
    ctx.fillRect(300, 100, 10, 200);
    ctx.fillRect(300, 350, 10, 200);

    // Horizontal walls
    ctx.fillRect(30, 200, 370, 10);
    ctx.fillRect(500, 200, 300, 10);
    ctx.fillRect(40, 400, 720, 10);

    // Draw green block (goal)
    ctx.fillStyle = 'green';
    ctx.fillRect(150, 300, 50, 50);
};

const drawLevelTen = (ctx) => {
    // Draw maze walls
    ctx.fillStyle = 'black';

    // Vertical walls
    ctx.fillRect(150, 0, 10, 600);
    

    // Horizontal walls
    ctx.fillRect(0, 200, 800, 10);
    ctx.fillRect(0, 400, 800, 10);

    // Draw green block (goal)
    ctx.fillStyle = 'green';
    ctx.fillRect(700, 350, 50, 50);
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
        // Ensure the image is loaded before attempting to draw
        if (!cursorImage.complete) {
            // Image not loaded yet, return or show loading
            return;
        }

        // Adjust position to draw the cursor image centered around the cursor position
        ctx.drawImage(cursorImage, cursorPos.x - cursorImage.width / 2, cursorPos.y - cursorImage.height / 2);
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
        // The current logic assumes a dot; we need to adjust for the image size
        const ctx = canvas.getContext('2d');
        // Adjust bounds to match cursor image size
        const bounds = {
            left: x - cursorImage.width / 2,
            right: x + cursorImage.width / 2,
            top: y - cursorImage.height / 2,
            bottom: y + cursorImage.height / 2,
        };

        // Sample multiple points on the image if necessary to improve collision accuracy
        const pointsToCheck = [
            { x: bounds.left, y: bounds.top },
            { x: bounds.right, y: bounds.top },
            { x: bounds.left, y: bounds.bottom },
            { x: bounds.right, y: bounds.bottom },
        ];

        // Check each point for a collision
        for (const point of pointsToCheck) {
            const imageData = ctx.getImageData(point.x, point.y, 1, 1).data;
            const isBlack = imageData[0] === 0 && imageData[1] === 0 && imageData[2] === 0 && imageData[3] === 255;
            const isGreen = imageData[0] === 0 && imageData[1] === 128 && imageData[2] === 0 && imageData[3] === 255;

            if (isBlack || isGreen) {
                // Handle collision with black or reaching green goal
                if (isGreen) {
                    setLevel(prevLevel => prevLevel + 1); // Move to next level
                }
                return false; // Collision detected, invalidate position
            }
        }
        return true; // No collision detected, position is valid
    };
    
    return (
        <>
            <div class="mt-5 ml-5">Time: {elapsedTime} seconds</div>
            <canvas ref={canvasRef} width={800} height={600} className="canvasGameBoard"></canvas>;
        </>
    
    )
}

export default GameCanvas;
