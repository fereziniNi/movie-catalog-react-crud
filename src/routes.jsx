import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from './paginas/inicio/Inicio';

import Criar from './paginas/Criar/Criar';
import Cabecalho from './components/Cabecalho/Cabecalho';
import Read from './paginas/Read/Read';

import NaoEncontrada from "./paginas/NotFound/NotFound";
import Rodape from './components/Rodape/Rodape';

import PaginaPadrao from './components/PaginaPadrao/PaginaPadrao';
import Update from './paginas/Update/Update';


function AppRoutes() {
  return (
    <BrowserRouter>
      <Cabecalho />

      <Routes>
        <Route path="/" element={<PaginaPadrao />}>

          <Route path="/" element={<Inicio />} />
          <Route path="/criarFilmes" element={<Criar />} />
          <Route path="/read/:id" element={<Read />} />
          <Route path="/update/:id" element={<Update />} />

        </Route>

        <Route path="*" element={<NaoEncontrada />} />

      </Routes>

      <Rodape />

    </BrowserRouter>
  )
}
export default AppRoutes;
