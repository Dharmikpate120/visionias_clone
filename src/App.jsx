
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Home/>
      </div>
    </>
  );
}

export default App;
