import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./layout/footer/Footer";
import Navbar from "./layout/navbar/Navbar";
import HomePage from "./pages/home/HomePage";
import QuranPageClass from "./pages/quran/QuranPageClass";
import SinglePage from "./pages/singlePage/SinglePage";
import Times from "./pages/times/Times";

// http://api.alquran.cloud/v1/quran/ar.alafasy

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quran" element={<QuranPageClass />} />
          <Route path="/times" element={<Times />} />
          <Route path="/posts/:number" element={<SinglePage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
