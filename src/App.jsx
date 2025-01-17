import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import { BrowserRouter } from 'react-router-dom'


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-screen bg-white">
          <Routes>


            <Route path="/" element={<Home />}></Route>
            <Route path="/publication" element={<PublicKeyCredential />}></Route>

          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
