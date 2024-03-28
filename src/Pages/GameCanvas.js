import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function GameCanvas({ levelImage, nextLevel, initialPosition = { x: 50, y: 50 } }) {
    const canvasRef = useRef(null);
    const navigate = useNavigate();
    const [cursorPosition, setCursorPosition] = useState(initialPosition);
    const image = new Image();

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        image.onload = () => {
            context.drawImage(image, 0, 0); // Draw the loaded image onto the canvas
        };
        image.src = levelImage; // Use the levelImage prop for the image source

        const updateCursorPosition = (event) => {
            const rect = canvas.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            checkCollisionAndMove(x, y);
        };

        canvas.addEventListener('mousemove', updateCursorPosition);

        return () => {
            canvas.removeEventListener('mousemove', updateCursorPosition);
        };
    }, [levelImage]);

    useEffect(() => {
        // Reset cursor position to initial position when nextLevel changes
        setCursorPosition(initialPosition);
    }, [nextLevel]);

    const checkCollisionAndMove = (newX, newY) => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;

        // Ensure newX and newY are within the bounds of the canvas
        if (newX < 0 || newX >= canvasWidth || newY < 0 || newY >= canvasHeight) {
            return; // Return early if coordinates are out of bounds
        }

        const imageData = context.getImageData(newX, newY, 1, 1).data;
        const color = { r: imageData[0], g: imageData[1], b: imageData[2] };

        if (color.r === 255 && color.g === 128 && color.b === 171) { // Red area
            setCursorPosition(initialPosition);
        } else if (color.r === 211 && color.g === 249 && color.b === 188) { // Green area
            // Navigate to the next level only if cursor is inside the green area
            navigate(nextLevel);
        } else if (!(color.r === 0 && color.g === 0 && color.b === 0)) { // If not black, move the cursor
            setCursorPosition({ x: newX, y: newY });
        }
        // No update if the color is black (obstacle)
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(image, 0, 0); // Redraw level
        context.fillStyle = 'red'; 
        context.beginPath();
        context.arc(cursorPosition.x, cursorPosition.y, 7, 0, 2 * Math.PI); // Draw the cursor
        context.fill();
    }, [cursorPosition]); 

    return (
        <canvas ref={canvasRef} width={800} height={600} style={{ cursor: 'none' }} />
    );
}

export default GameCanvas;
