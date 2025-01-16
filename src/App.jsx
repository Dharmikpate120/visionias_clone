import "./App.css";
import ImageCarousel from "./Components/ImageCarousel";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="container ">
          <ImageCarousel />
        </div>
      </div>
    </>
  );
}

export default App;
