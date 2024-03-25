import './App.css';
import Homepage from './Pages/Homepage';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WaitingRoom from './Pages/WaitingRoom';
import LevelOne from './Pages/LevelOne'; // Import LevelOne component
import LevelTwo from './Pages/LevelTwo'; // Import LevelTwo component
import Instructions from './Pages/Instructions';

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
          {/* Add more routes as needed for additional levels */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
