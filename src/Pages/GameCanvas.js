import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function GameCanvas({ levelImage, nextLevel, initialPosition = { x: 50, y: 50 } }) {
    const canvasRef = useRef(null);
    const navigate = useNavigate();
    const [cursorPosition, setCursorPosition] = useState(initialPosition);
    const image = new Image();  // Define the image variable outside the useEffect hooks

    // Load the image and set up the canvas when the component mounts or when levelImage changes
    useEffect(() => {
        image.onload = () => {
            const canvas = canvasRef.current;
            if (canvas) {
                const context = canvas.getContext('2d');
                context.clearRect(0, 0, canvas.width, canvas.height); // Clear previous drawings
                // Center the image: calculate the top left corner's x and y coordinates
                const xOffset = (canvas.width - image.width) / 2;
                const yOffset = (canvas.height - image.height) / 2;
                context.drawImage(image, xOffset, yOffset); // Draw the loaded image onto the canvas
            }
        };
        image.src = levelImage; // Setting the source after defining onload, to ensure it triggers
    }, [levelImage]);

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.addEventListener('mousemove', (event) => {
            const rect = canvas.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            // Directly update without set state to avoid too frequent updates
            cursorPosition.x = x;
            cursorPosition.y = y;
            requestAnimationFrame(() => updateCanvas(x, y)); // Update canvas smoothly
        });
    }, []); // Empty array means this effect runs once when the component mounts

    const updateCanvas = (x, y) => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        // Re-draw background image
        if (image.complete) { // Check if image has been loaded
            context.clearRect(0, 0, canvas.width, canvas.height);
            const xOffset = (canvas.width - image.width) / 2;
            const yOffset = (canvas.height - image.height) / 2;
            context.drawImage(image, xOffset, yOffset);
            // Re-draw cursor
            context.fillStyle = 'red';
            context.beginPath();
            context.arc(x, y, 10, 0, 2 * Math.PI);
            context.fill();
        }
    };

    const checkCollisionAndMove = (x, y) => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const xOffset = (canvas.width - image.width) / 2;
        const yOffset = (canvas.height - image.height) / 2;
        // Ensure we check the color within the bounds of the image
        if (x >= xOffset && y >= yOffset && x <= xOffset + image.width && y <= yOffset + image.height) {
            const imageData = context.getImageData(x, y, 1, 1).data;
            const color = { r: imageData[0], g: imageData[1], b: imageData[2] };
            if (color.r === 255 && color.g === 128 && color.b === 171) {
                setCursorPosition(initialPosition);
            } else if (color.r === 211 && color.g === 249 && color.b === 188) {
                navigate(nextLevel);
            }
        }
    };

    return <canvas ref={canvasRef} width={800} height={600} style={{ border: '5px solid black', display: 'block', margin: 'auto' }} />;
}

export default GameCanvas

