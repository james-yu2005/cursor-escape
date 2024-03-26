import './App.css';
import Homepage from './Pages/Homepage';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WaitingRoom from './Pages/WaitingRoom';
import LevelOne from './Pages/LevelOne'; // Import LevelOne component
import LevelTwo from './Pages/LevelTwo'; // Import LevelTwo component
import LevelThree from './Pages/LevelThree'; //Import LevelThree component
import LevelFour from './Pages/LevelFour';
import Instructions from './Pages/Instructions';
import EndPage from './Pages/EndPage';
import { Analytics } from "@vercel/analytics/react"


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/WaitingRoom" element={<WaitingRoom/>} />
          <Route path="/Instructions" element={<Instructions/>} />
          <Route path="/level1" element={<LevelOne/>} /> {/* Add route for level 1 */}
          <Route path="/level2" element={<LevelTwo/>} /> {/* Add route for level 2 */}
          <Route path="/level3" element={<LevelThree/>} /> {/* Add route for level 2 */}
          <Route path="/level4" element={<LevelFour/>} /> {/* Add route for level 2 */}
          <Route path="/EndPage" element={<EndPage/>} /> 
          <Analytics/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
