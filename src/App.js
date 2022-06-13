import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Card from "./pages/Card";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route to="/" element={<Home />}></Route>
          <Route to="/card" element={<Card />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
