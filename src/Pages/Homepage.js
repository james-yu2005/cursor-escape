
function Homepage(){
    return(
        <>
            <h1 class ="text-center mt-7 mb-6">Cursor Escape</h1>
            <div class="p-2 bg-black">
                <input type="text" id="create-room-name" placeholder="Room name:" class="line-clamp-3"></input>
                <input type="text" id="create-room-username" placeholder="Username:"></input>
            </div>
            <input type="text" id="join-room-enter-code" placeholder="Enter Code:" class="line-clamp-3"></input>
            <input type="text" id="join-room-username" placeholder="Username:"></input>


            
            <button></button>
        </>
    );
}

export default Homepage