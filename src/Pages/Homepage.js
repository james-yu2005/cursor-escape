import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LevelOne from "./LevelOne";

export default function Homepage(){
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    return(
        <div>
            <h1 class="text-center mt-10 mb-10">Cursor Escape!</h1>
            <div class=" rounded-lg flex flex-col items-center justify-center p-4 "> Join a Room
                <label>
                    <input class = "mt-4"autoComplete="off" type="text" placeholder="Username:" value={username} onChange={handleUsernameChange}/> 
                </label>
                <button onClick = {() => navigate('/WaitingRoom')} class="mt-6 p-1 bg-green-600 rounded-lg hover:bg-blue-700 w-20">Join</button>
                <button onClick={() => navigate('/Instructions')} class="mt-8 p-2 bg-blue-400 rounded-lg hover:bg-purple-300 w-39">Instructions</button>
            </div>
            <h1 class="mt-4 text-center">Welcome {username} and have fun! &#40;Creators: James, Patrick&#41;</h1>
        </div>
    );
}
