import { useNavigate } from "react-router-dom";
function Instructions(){
    const navigate = useNavigate();
    return(
        <>
            <h1 class="text-center mt-20 text-2xl">Instructions</h1>
            <h2 class="text-center p-10 mr-20 ml-20">The goal of the game is to move your cursor to the green areas while avoiding the black areas that you cannot pass through. Enjoy the game!</h2>
            <div class="flex flex-col items-center justify-center">
                <button onClick={() => navigate('/')} class="mt-4 p-2 bg-blue-400 rounded-lg hover:bg-purple-300 w-39">Homepage</button>
            </div>
        </>
    )
}
export default Instructions