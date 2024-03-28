import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import GameCanvas from "./GameCanvas";

export default function Homepage(){
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    return(
        <div>
            <div>
                <h1 class="text-center text-2xl mt-20">Welcome to Cursor Escape!</h1>
                <h1 class="mt-3 text-center text-sm mb-20 text-gray-500">Creators: &#40;James, Patrick&#41;</h1>
            </div>
            <h1 class="mt-4 text-center">Hi <div class="text-blue-400 inline-block">{username}</div> and have fun!</h1>
            <div class="rounded-lg flex flex-col items-center justify-center p-4 ">
                <label>
                    <input class ="mt-4 bg-gray-50 border border-gray-300 text-gray-900 text-med rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" autoComplete="off" type="text" placeholder="Username:" value={username} onChange={handleUsernameChange}/> 
                </label>
                <button onClick = {() => navigate('/WaitingRoom')} class="mt-6 p-2 bg-green-400 rounded-lg hover:bg-blue-400 w-31">Play Game</button>
                <button onClick={() => navigate('/Instructions')} class="mt-6 p-2 bg-blue-400 rounded-lg hover:bg-green-400 w-39">Instructions</button>
            </div>
            
            
            
        </div>
    );
}
