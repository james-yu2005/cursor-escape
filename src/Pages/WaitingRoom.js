import React from 'react';
import { useNavigate } from 'react-router-dom';

function WaitingRoom() {
    const navigate = useNavigate();

    return (
        <div>
            <h1 className="text-center mt-7 mb-6">Ready to Play?</h1>
            <div className="text-center">
                <button 
                    onClick={() => navigate('/Game')} 
                    className="mt-8 p-2 bg-orange-400 rounded-lg hover:bg-yellow-300 w-39"
                >
                    Start Game
                </button>
            </div>
        </div>
    );   
}

export default WaitingRoom;
