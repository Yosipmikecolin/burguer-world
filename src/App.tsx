import { Route, Routes } from "react-router-dom";
import Tops from "./views/tops/Tops";
import Saucers from "./views/saucers/Saucers";
import We from "./views/ingredients/we";
import Header from "./components/header/Header";
import { useState } from "react";

function App() {
  const [openCart, setOpenCart] = useState(false);
  return (
    <main>
      <Header setOpenCart={setOpenCart} />
      <Routes>
        <Route path="/" element={<Tops isOpenCart={openCart} />} />
        <Route path="/saucers" element={<Saucers isOpenCart={openCart} />} />
        <Route path="/ingredients" element={<We />} />
      </Routes>
    </main>
  );
}

export default App;
