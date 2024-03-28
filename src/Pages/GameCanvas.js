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
          // Additional cases for other levels
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
        const stepSize = 5; // Controls cursor movement "speed"
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
