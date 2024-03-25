import React from 'react';
import { useNavigate } from 'react-router-dom';

function WaitingRoom() {
    const navigate = useNavigate();

    return (
        <div>
            <h1 className="text-center mt-7 mb-6">Waiting for Players...</h1>
            <div className="text-center">
                <button 
                    onClick={() => navigate('/level1')} 
                    className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Start Game
                </button>
            </div>
        </div>
    );   
}

export default WaitingRoom;
