// src/App.js (Restaurando o Header)
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // BrowserRouter está no index.js
import Header from './components/Header';
import HomePage from './pages/HomePage';         // <-- Rota de exemplo

function App() {
  return (
      <div> {/* BrowserRouter está no index.js */}
        <Header /> {/* <--- Descomentado */}
        <main>
          <Routes>
             <Route path="/" element={<HomePage />} />
             {/* Mantenha outras rotas comentadas por enquanto */}
          </Routes>
        </main>
      </div>
  );
}
export default App;