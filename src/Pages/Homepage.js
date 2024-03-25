import React from "react";
import WaitingRoom from "./WaitingRoom";
import { useNavigate } from "react-router-dom";
function Homepage(){
    const navigate = useNavigate();
    return(
        <div>
            <h1 class ="text-center mt-7 mb-6">Cursor Escape</h1>
            <div class="p-2 rounded-lg flex flex-col items-center justify-center p-4"> Create a Room
                <input type="text" id="create-room-name" placeholder="Room name:" class=""></input>
                <input type="text" id="create-room-username" placeholder="Username:"></input>
                <button onClick = {() => navigate('/WaitingRoom')} class="p-2 bg-green-600 rounded-lg hover:bg-blue-700">Create</button>
            </div>
            <div class="p-2 rounded-lg flex flex-col items-center justify-center p-4"> Join a Room
                <input type="text" id="join-room-enter-code" placeholder="Enter Code:" class=""></input>
                <input type="text" id="join-room-username" placeholder="Username:"></input>
                <button onClick = {() => navigate('/WaitingRoom')} class="p-2 bg-green-600 rounded-lg hover:bg-blue-700">Join</button>
            </div>
        </div>
    );
}

export default Homepage