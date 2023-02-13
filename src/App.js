import "./sass/style.css";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Body from "./components/Body/Body";
import VideoDetails from "./components/VideoDetails/VideoDetails";
import ChannelDetails from "./components/ChannelDetails/ChannelDetails";
import SearchFeed from "./components/SearchFeed/SearchFeed";

function App() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  return (
    <div className={`app overflow-hidden min-h-screen ${darkMode ? "dark" : ""}`}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Body />}/>
          <Route path="/YouTube-React" element={<Body />} />
          <Route path="/video/:id" element={<VideoDetails />}/>
          <Route path="/channel/:id" element={<ChannelDetails />}/>
          <Route path="/search/:searchTerm" element={<SearchFeed />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;