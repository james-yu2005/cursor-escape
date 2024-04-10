import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apple from '../Pages/Cursor_images/apple.png';
import banana from '../Pages/Cursor_images/banana.png';
import grape from '../Pages/Cursor_images/grape.png';
import pineapple from '../Pages/Cursor_images/pineapple.png';
import poopy from '../Pages/Cursor_images/poopy.png'

function WaitingRoom() {
    const navigate = useNavigate();
    const [cursorIndex, setCursorIndex] = useState(0);
    const cursorImages = [
        { src: apple, name: 'Apple' },
        { src: banana, name: 'Banana' },
        { src: grape, name: 'Grape' },
        { src: pineapple, name: 'Pineapple' },
        { src: poopy, name: 'Poopy'}
    ];

    const changeCursor = (delta) => {
        const newIndex = (cursorIndex + delta + cursorImages.length) % cursorImages.length;
        setCursorIndex(newIndex);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl mb-10">Ready to Play? Select your Character!</h1>
            <div className="flex items-center mb-2">
                <button
                    onClick={() => changeCursor(-1)}
                    className="bg-gray-200 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded-l-full"
                >
                    &lt;
                </button>
                <img src={cursorImages[cursorIndex].src} alt={cursorImages[cursorIndex].name} className="h-12 mx-2" />
                <button
                    onClick={() => changeCursor(1)}
                    className="bg-gray-200 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded-r-full"
                >
                    &gt;
                </button>
            </div>
            <div className="text-center mb-4">{cursorImages[cursorIndex].name}</div>
            <button
                onClick={() => navigate('/Game', { state: { cursor: cursorImages[cursorIndex].src } })}
                className="mt-20 p-2 bg-orange-400 rounded-lg hover:bg-yellow-300 w-39"
            >
                Start Game
            </button>
        </div>
    );
}

export default WaitingRoom;
