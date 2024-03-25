import React from "react";
import WaitingRoom from "./WaitingRoom";
import { useNavigate } from "react-router-dom";
function Homepage(){
    const navigate = useNavigate();
    return(
        <div>
            <h1 class="text-center mt-10 mb-10">Cursor Escape!</h1>
            <div class=" rounded-lg flex flex-col items-center justify-center p-4"> Join a Room
                <input type="text" id="join-room-enter-code" placeholder="Enter Code:" class="mt-10"></input>
                <input type="text" id="join-room-username" placeholder="Username:"></input>
                <button onClick = {() => navigate('/WaitingRoom')} class="mt-6 p-1 bg-green-600 rounded-lg hover:bg-blue-700 w-20">Join</button>
            </div>
        </div>
    );
}

export default Homepage