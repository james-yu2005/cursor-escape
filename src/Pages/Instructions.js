import { useNavigate } from "react-router-dom";
function Instructions(){
    const navigate = useNavigate();
    return(
        <>
            <h1 class="text-center mt-20">Instructions</h1>
            <h2 class="text-center p-20 mr-20 ml-20">The goal of the game is to move your cursor to the green areas while avoiding the red areas. 
               You cannot pass through black areas. You can change your cursor to different items with the drop down menu in the Ready Page. Enjoy the game!</h2>
            <div class="flex flex-col items-center justify-center">
                <button onClick={() => navigate('/')} class="mt-8 p-2 bg-blue-400 rounded-lg hover:bg-purple-300 w-39">Homepage</button>
            </div>
        </>
    )
}
export default Instructions