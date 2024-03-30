import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './GameCanvas.css'; // Ensure this CSS file sets the canvas cursor to 'none'
import grape from '../Cursor_images/grape.png' // Import the cursor image
import banana from '../Cursor_images/banana.png';
import apple from '../Cursor_images/apple.png';

function GameCanvas({ nextLevel, initialPosition = { x: 25, y: 25 } }) {
    const [level, setLevel] = useState(1);
    const [cursorPos, setCursorPos] = useState(initialPosition);
    const canvasRef = useRef(null);
    const [currentCursor, setCurrentCursor] = useState(grape);
    const navigate = useNavigate();
    
    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        drawGameBoard(context); // Initial draw
        const handleMouseMove = (e) => updateCursorPos(e);
        document.addEventListener('mousemove', handleMouseMove);
        return () => document.removeEventListener('mousemove', handleMouseMove);
    }, [level, cursorPos]);

    const drawGameBoard = (ctx) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
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
            // Add more cases for additional levels
            default:
                console.log('Congratulations, you have completed all levels!');
                navigate(nextLevel);
                break;
        }
    };

    const drawLevelOne = (ctx) => {
        // Draw level one elements
        ctx.fillStyle = 'black';
        ctx.fillRect(50, 50, 200, 10); // Obstacle
        ctx.fillStyle = 'green';
        ctx.fillRect(250, 150, 50, 50); // Goal
    };
    
    const drawLevelTwo = (ctx) => {
        // Draw level two elements
        ctx.fillStyle = 'black';
        ctx.fillRect(50, 50, 200, 10); // Obstacle
        ctx.fillRect(100, 200, 200, 10); // Another obstacle
        ctx.fillStyle = 'green';
        ctx.fillRect(400, 400, 50, 50); // Goal
    };
    
    const drawLevelThree = (ctx) => {
        // Draw level three elements including red blocks
        ctx.fillStyle = 'black';
        ctx.fillRect(50, 50, 200, 10); // Obstacle
        ctx.fillRect(100, 200, 200, 10); // Another obstacle
        ctx.fillStyle = 'green';
        ctx.fillRect(400, 400, 50, 50); // Goal
    };
    const drawLevelFour = (ctx) => {
        // Draw level four elements including red blocks
        ctx.fillStyle = 'red'; // Set fill style to red
        ctx.fillRect(150, 150, 50, 50); // Sample red block
        ctx.fillRect(250, 250, 50, 50); // Sample red block
        // Other elements
        ctx.fillStyle = 'black';
        ctx.fillRect(50, 50, 200, 10); // Obstacle
        ctx.fillRect(300, 100, 10, 200); // Another obstacle
        ctx.fillStyle = 'green';
        ctx.fillRect(400, 400, 50, 50); // Goal
    };
    
    // Define drawLevelFive to draw level five elements
    
    const drawLevelFive = (ctx) => {
        // Draw level five elements including red blocks
        ctx.fillStyle = 'red'; // Set fill style to red
        ctx.fillRect(150, 150, 50, 50); // Sample red block
        ctx.fillRect(250, 250, 50, 50); // Sample red block
        // Other elements
        ctx.fillStyle = 'black';
        ctx.fillRect(50, 50, 200, 10); // Obstacle
        ctx.fillRect(300, 100, 10, 200); // Another obstacle
        ctx.fillRect(100, 300, 200, 10); // Another obstacle
        ctx.fillStyle = 'green';
        ctx.fillRect(400, 400, 50, 50); // Goal
    };
    
    // Define drawLevelSix to draw level six elements
    
    const drawLevelSix = (ctx) => {
        // Draw level six elements including red blocks
        ctx.fillStyle = 'red'; // Set fill style to red
        ctx.fillRect(150, 150, 50, 50); // Sample red block
        ctx.fillRect(250, 250, 50, 50); // Sample red block
        // Other elements
        ctx.fillStyle = 'black';
        ctx.fillRect(50, 50, 200, 10); // Obstacle
        ctx.fillRect(300, 100, 10, 200); // Another obstacle
        ctx.fillRect(100, 300, 200, 10); // Another obstacle
        ctx.fillRect(200, 200, 100, 10); // Another obstacle
        ctx.fillStyle = 'green';
        ctx.fillRect(400, 400, 50, 50); // Goal
    };
    
    // Define drawLevelSeven to draw level seven elements
    
    const drawLevelSeven = (ctx) => {
        // Draw level seven elements including red blocks
        ctx.fillStyle = 'red'; // Set fill style to red
        ctx.fillRect(150, 150, 50, 50); // Sample red block
        ctx.fillRect(250, 250, 50, 50); // Sample red block
        // Other elements
        ctx.fillStyle = 'black';
        ctx.fillRect(50, 50, 200, 10); // Obstacle
        ctx.fillRect(300, 100, 10, 200); // Another obstacle
        ctx.fillRect(100, 300, 200, 10); // Another obstacle
        ctx.fillRect(200, 200, 100, 10); // Another obstacle
        ctx.fillRect(400, 200, 10, 100); // Another obstacle
        ctx.fillStyle = 'green';
        ctx.fillRect(400, 400, 50, 50); // Goal
    };
    
    // Define drawLevelEight to draw level eight elements
    
    const drawLevelEight = (ctx) => {
        // Draw level eight elements including red blocks
        ctx.fillStyle = 'red'; // Set fill style to red
        ctx.fillRect(150, 150, 50, 50); // Sample red block
        ctx.fillRect(250, 250, 50, 50); // Sample red block
        // Other elements
        ctx.fillStyle = 'black';
        ctx.fillRect(50, 50, 200, 10); // Obstacle
        ctx.fillRect(300, 100, 10, 200); // Another obstacle
        ctx.fillRect(100, 300, 200, 10); // Another obstacle
        ctx.fillRect(200, 200, 100, 10); // Another obstacle
        ctx.fillRect(400, 200, 10, 100); // Another obstacle
        ctx.fillRect(200, 400, 10, 100); // Another obstacle
        ctx.fillStyle = 'green';
        ctx.fillRect(400, 400, 50, 50); // Goal
    };
    
    // Define drawLevelNine to draw level nine elements
    
    const drawLevelNine = (ctx) => {
        // Draw level nine elements including red blocks
        ctx.fillStyle = 'red'; // Set fill style to red
        ctx.fillRect(150, 150, 50, 50); // Sample red block
        ctx.fillRect(250, 250, 50, 50); // Sample red block
        // Other elements
        ctx.fillStyle = 'black';
        ctx.fillRect(50, 50, 200, 10); // Obstacle
        ctx.fillRect(300, 100, 10, 200); // Another obstacle
        ctx.fillRect(100, 300, 200, 10); // Another obstacle
        ctx.fillRect(200, 200, 100, 10); // Another obstacle
        ctx.fillRect(400, 200, 10, 100); // Another obstacle
        ctx.fillRect(200, 400, 10, 100); // Another obstacle
        ctx.fillRect(100, 100, 100, 10); // Another obstacle
        ctx.fillStyle = 'green';
        ctx.fillRect(400, 400, 50, 50); // Goal
    };
    
    // Define drawLevelTen to draw level ten elements
    
    const drawLevelTen = (ctx) => {
        // Draw level ten elements including red blocks
        ctx.fillStyle = 'red'; // Set fill style to red
        ctx.fillRect(150, 150, 50, 50); // Sample red block
        ctx.fillRect(250, 250, 50, 50); // Sample red block
        // Other elements
        ctx.fillStyle = 'black';
        ctx.fillRect(50, 50, 200, 10); // Obstacle
        ctx.fillRect(300, 100, 10, 200); // Another obstacle
        ctx.fillRect(100, 300, 200, 10); // Another obstacle
        ctx.fillRect(200, 200, 100, 10); // Another obstacle
        ctx.fillRect(400, 200, 10, 100); // Another obstacle
        ctx.fillRect(200, 400, 10, 100); // Another obstacle
        ctx.fillRect(100, 100, 100, 10); // Another obstacle
        ctx.fillRect(350, 350, 50, 50); // Another obstacle
        ctx.fillStyle = 'green';
        ctx.fillRect(400, 400, 50, 50); // Corrected fillRect call

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
        const imageData = ctx.getImageData(x - 5, y - 5, 10, 10).data;
        for (let i = 0; i < imageData.length; i += 4) {
            const isBlack = imageData[i] === 0 && imageData[i + 1] === 0 && imageData[i + 2] === 0 && imageData[i + 3] === 255;
            const isGreen = imageData[i] === 0 && imageData[i + 1] === 128 && imageData[i + 2] === 0 && imageData[i + 3] === 255;
            const isRed = imageData[i] === 255 && imageData[i + 1] === 0 && imageData[i + 2] === 0 && imageData[i + 3] === 255;
            
            if (isBlack) {
                console.log('Collision with a black obstacle.');
                return false;
            }
            if (isGreen) {
                console.log('Reached the green goal!');
                setLevel(prevLevel => prevLevel + 1);
                return false;
            }
            if (isRed) {
                console.log('Hit a red block!');
                
                return false;
            }
        }
        return true;
    };
    
    

    const setGrape = () => {
        setCurrentCursor(grape);
    };

    const setApple = () => {
        setCurrentCursor(apple);
    };

    const setBanana = () => {
        setCurrentCursor(banana);
    };

    return (
        <div className="flex flex-col items-center justify-center p-2 ">
            <canvas ref={canvasRef} width={800} height={600} className="canvasGameBoard" style={{ cursor: `url(${currentCursor}), auto` }}></canvas>
            <button onClick={setGrape} className="mt-6 p-2 bg-green-400 rounded-lg hover:bg-blue-400 w-20 ml-3 mr-3 ">Grape</button>
            <button onClick={setBanana} className="mt-6 p-2 bg-green-400 rounded-lg hover:bg-blue-400 w-20 ml-3 mr-3">Banana</button>
            <button onClick={setApple} className="mt-6 p-2 bg-green-400 rounded-lg hover:bg-blue-400 w-20 ml-3 mr-3">Apple</button>
        </div>
    );
}

export default GameCanvas;
