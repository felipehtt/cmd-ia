import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import BotCmd from "./pages/bot-cmd";
import Contato from "./pages/contato";
import Login from "./pages/login";
import SobreCmd from "./pages/sobre-cmd";

export default function Navegacao() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/botCmd" element={<BotCmd />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sobre" element={<SobreCmd />} />

      </Routes>
    </BrowserRouter>
  );
}