import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// importing screens
import HomeScreen from "./Screens/HomeScreen";
import CommunityScreen from "./Screens/CommunityScreen";
import AboutScreen from "./Screens/AboutScreen";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/community" element={<CommunityScreen />} />
          <Route path="/about" element={<AboutScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
