import "./App.css";
import Home from "./components/Home";
import AddRecipePage from "./components/AddRecipePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/add" element={<AddRecipePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
