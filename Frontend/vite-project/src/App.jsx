import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './Components/Login';
import Signup from './Components/Signup';
import Homepage from "./Components/Homepage";

function App() {

  return (
    <Router>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    </Router>
);
}

export default App
