// src/App.js (ou arquivo similar de configuração de rotas)

import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

// 1. Importar todos os componentes de página
// ===========================================

// Páginas principais
import HomePage from './pages/HomePage';
import PoliticaDeQualidade from './pages/PolíticaDeQualidade'; // Página principal da seção
import Produtos from './pages/Produtos'; // Página principal da seção

// Páginas da seção "Política de Qualidade"
import AlimentosSeguros from './pages/politica-qualidade/alimentos-seguros/AlimentosSeguros';
import AtenderSuperarNecessidades from './pages/politica-qualidade/atender-necessidades/AtenderSuperarNecessidades';
import AtenderNormas from './pages/politica-qualidade/atender-normas/AtenderNormas';
import ComprometimentoMelhoria from './pages/politica-qualidade/comprometimento-melhoria/ComprometimentoMelhoria';
import DesenvolverPessoas from './pages/politica-qualidade/desenvolver-pessoas/DesenvolverPessoas';

// Páginas da seção "Produtos"
import CarcacaBovina from './pages/produtos/carcaca-bovina/CarcacaBovina';
import CarcacaSuina from './pages/produtos/carcaca-suina/CarcacaSuina';
import Industrializados from './pages/produtos/industrializados/Industrializados';
import Miudos from './pages/produtos/miudos/Miudos';
import PalattoBovino from './pages/produtos/palatto-bovino/PalattoBovino';
import PalattoSuino from './pages/produtos/palatto-suino/PalattoSuino';
import PaoDeAlho from './pages/produtos/pao-de-alho/PaoDeAlho'; // Verifique se o nome do arquivo está correto (Alho/Aiho)
import PaoDeQueijo from './pages/produtos/pao-de-queijo/PaoDeQueijo';
import PremiumGrill from './pages/produtos/premium-grill/PremiumGrill';
import PrimeBaby from './pages/produtos/prime-baby/PrimeBaby';
import TradicionalBovino from './pages/produtos/tradicional-bovino/TradicionalBovino'; // Atenção ao espaço no nome! Idealmente renomear o arquivo.
import TradicionalSuino from './pages/produtos/tradicional-suino/TradicionalSuino';
import Vegetais from './pages/produtos/vegetais/Vegetais';

// Páginas da seção "Sobre"
import Industria from './pages/sobre/industria/Industria';
import NossaHistoria from './pages/sobre/nossa-historia/NossaHistoria';

// Página para Not Found (404) - Crie este componente se ainda não existir
import NotFoundPage from './pages/NotFoundPage'; // ou o caminho correto para ele

// ===========================================

function App() {
  return (
    <div>
      {/* Exemplo de Navegação - Adapte conforme necessário */}
      <nav>
        <ul>
          <li><Link to="/">Início</Link></li>
          <li><Link to="/sobre/nossa-historia">Nossa História</Link></li>
          <li><Link to="/produtos">Produtos</Link></li>
          <li><Link to="/politica-qualidade">Política de Qualidade</Link></li>
        </ul>
      </nav>
      <hr />

      {/* 2. Definir as Rotas */}
      {/* =========================================== */}
      <Routes>
        {/* Rota Principal */}
        <Route path="/" element={<HomePage />} />

        {/* Rotas "Sobre" */}
        <Route path="/sobre/industria" element={<Industria />} />
        <Route path="/sobre/nossa-historia" element={<NossaHistoria />} />
        {/* Nota: Não há um componente "Sobre.jsx" principal na sua estrutura, então '/sobre' não terá uma página */}

        {/* Rota Principal "Produtos" e sub-rotas */}
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/produtos/carcaca-bovina" element={<CarcacaBovina />} />
        <Route path="/produtos/carcaca-suina" element={<CarcacaSuina />} />
        <Route path="/produtos/industrializados" element={<Industrializados />} />
        <Route path="/produtos/miudos" element={<Miudos />} />
        <Route path="/produtos/palatto-bovino" element={<PalattoBovino />} />
        <Route path="/produtos/palatto-suino" element={<PalattoSuino />} />
        <Route path="/produtos/pao-de-alho" element={<PaoDeAlho />} />
        <Route path="/produtos/pao-de-queijo" element={<PaoDeQueijo />} />
        <Route path="/produtos/premium-grill" element={<PremiumGrill />} />
        <Route path="/produtos/prime-baby" element={<PrimeBaby />} />
        <Route path="/produtos/tradicional-bovino" element={<TradicionalBovino />} />
        <Route path="/produtos/tradicional-suino" element={<TradicionalSuino />} />
        <Route path="/produtos/vegetais" element={<Vegetais />} />

        {/* Rota Principal "Política de Qualidade" e sub-rotas */}
        <Route path="/politica-qualidade" element={<PoliticaDeQualidade />} />
        <Route path="/politica-qualidade/alimentos-seguros" element={<AlimentosSeguros />} />
        <Route path="/politica-qualidade/atender-necessidades" element={<AtenderSuperarNecessidades />} />
        <Route path="/politica-qualidade/atender-normas" element={<AtenderNormas />} />
        <Route path="/politica-qualidade/comprometimento-melhoria" element={<ComprometimentoMelhoria />} />
        <Route path="/politica-qualidade/desenvolver-pessoas" element={<DesenvolverPessoas />} />

        {/* Rota para Página Não Encontrada (404) */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {/* =========================================== */}

    </div>
  );
}

export default App;