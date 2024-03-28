import './App.css';
import Homepage from './Pages/Homepage';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WaitingRoom from './Pages/WaitingRoom';
import GameCanvas from './Pages/GameCanvas';
import Instructions from './Pages/Instructions';
import EndPage from './Pages/EndPage';
import { Analytics } from "@vercel/analytics/react"


function App() {
  return (
    <>
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/WaitingRoom" element={<WaitingRoom/>} />
          <Route path="/Instructions" element={<Instructions/>} />
          <Route path="/Game" element={<GameCanvas/>} /> {/* Add route for level 1 */}
          <Route path="/EndPage" element={<EndPage/>} /> 
         
        </Routes>
      </div>
    </Router>
     <Analytics/>
     </>
  );
}

export default App;
