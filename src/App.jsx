import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <div className="min-h-screen bg-main1 text-light6">
        <Navbar />
        <Home />
      </div>
    </>
  );
}

export default App;
