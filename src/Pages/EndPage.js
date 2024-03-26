import React from 'react';
import { useNavigate } from "react-router-dom";

export default function EndPage(){
    const navigate = useNavigate();
    return(
        <>
            <h1 class="mt-8 text-center">You beat the game!</h1>
            <div class="flex flex-col items-center justify-center">
                <button onClick={() => navigate('/')} class="mt-8 p-2 bg-blue-400 rounded-lg hover:bg-purple-300 w-39">Homepage</button>
            </div>
        </>
    )
}