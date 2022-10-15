import Header from "./components/header/Header";
import Cardlist from "./components/cardList/Cardlist";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favorites from "./components/favorites/Favorites";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Cardlist />} />

          <Route path="/favorites" element={<Favorites />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
