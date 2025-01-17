import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Routes>
        <div className="min-h-screen bg-white">
          <Navbar />
          <Route path="/" element={<Home />}></Route>
        </div>
      </Routes>
    </>
  );
}

export default App;
