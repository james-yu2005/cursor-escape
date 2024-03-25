import './App.css';
import Homepage from './Pages/Homepage';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WaitingRoom from './Pages/WaitingRoom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/WaitingRoom" element={<WaitingRoom/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
