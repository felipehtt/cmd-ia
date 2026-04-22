import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import BotCmd from "./pages/bot-cmd";
import Comunidade from "./pages/comunidade";
import Login from "./pages/login";
import SobreCmd from "./pages/sobre-cmd";
import CmdIA from "./pages/cmd-ia";
import Suporte from "./pages/suporte";

export default function Navegacao() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/botCmd" element={<BotCmd />} />
        <Route path="/comunidade" element={<Comunidade />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sobre" element={<SobreCmd />} />
        <Route path="/cmdia" element={<CmdIA />} />
        <Route path="/suporte" element={<Suporte />} />

        <Route path="*" element={<h1>Página Não Encontrada</h1>} />
        
      </Routes>
    </BrowserRouter>
  );
}