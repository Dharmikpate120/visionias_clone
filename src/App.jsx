import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import { BrowserRouter } from "react-router-dom";
import Publication from "./Pages/Publication";
import Megazines from "./Pages/Megazines";
import Academy from "./Pages/Academy";
import DigitalApplication from "./Pages/DigitalApplication";
import Events from "./Pages/Events";
import Blogs from "./Pages/Blogs";
import Career from "./Pages/Career";
import ContactUs from "./Pages/ContactUs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-screen bg-main1 text-light6">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/publication" element={<Publication />}></Route>
            <Route path="/megazines" element={<Megazines />}></Route>
            <Route path="/academy" element={<Academy />}></Route>
            <Route
              path="/digital-application"
              element={<DigitalApplication />}
            ></Route>
            <Route path="/events" element={<Events />}></Route>
            <Route path="/blogs" element={<Blogs />}></Route>
            <Route path="/career" element={<Career />}></Route>
            <Route path="/contact-us" element={<ContactUs />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
