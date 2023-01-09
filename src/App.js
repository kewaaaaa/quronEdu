import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./layout/footer/Footer";
import Navbar from "./layout/navbar/Navbar";
import HomePage from "./pages/home/HomePage";

// http://api.alquran.cloud/v1/quran/ar.alafasy

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
        <Footer />
    </div>
  );
}

export default App;
