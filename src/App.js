// Importa o React para criar componentes.
import React from 'react';

// Importa estilos globais para a aplicação.
import GlobalStyles from './styles/GlobalStyles';

// Importa componentes de roteamento do React Router DOM.
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Importa as páginas que serão usadas nas rotas.
import Home from './pages/Home';
import Personagens from './pages/Personagens';
import Temporadas from './pages/Temporadas';
import Contato from './pages/Contato';
import Cadastro from './pages/Cadastro';
import Bio from './pages/Bio';
import Login from './pages/Login';
import Temporada from './pages/Temporada';

// Importa o contexto da API para fornecer dados compartilhados entre os componentes.
import { ApiProvider } from './context/ApiContext';

// Função para verificar se o usuário está autenticado.
// Utiliza o sessionStorage para verificar a presença de um estado de autenticação.
const isAuthenticated = () => {
  return sessionStorage.getItem('isAuthenticated') === 'true';
};

// Componente para gerenciar rotas protegidas.
// Permite acesso à rota somente se o usuário estiver autenticado.
function PrivateRoute({ element }) {
  return isAuthenticated() ? element : <Navigate to="/login" replace />;
}

// Componente principal da aplicação.
function App() {
  // Função para lidar com logout do usuário.
  // Remove o estado de autenticação do sessionStorage e redireciona para a página de login.
  const handleLogout = () => {
    sessionStorage.removeItem('isAuthenticated');
    window.location.href = '/login'; // Redireciona para login após logout.
  };

  return (
    // Provedor do contexto da API para que os dados estejam disponíveis em toda a aplicação.
    <ApiProvider>
      {/* Configuração do roteador para definir as rotas da aplicação. */}
      <Router>
        {/* Estilos globais da aplicação. */}
        <GlobalStyles />

        {/* Definição das rotas. */}
        <Routes>
          {/* Rota pública para a página inicial. */}
          <Route path="/" element={<Home />} />

          {/* Rota pública para a página de personagens. */}
          <Route path="/personagens" element={<Personagens />} />

          {/* Rota pública para a página de temporadas. */}
          <Route path="/temporadas" element={<Temporadas />} />

          {/* Rota pública para detalhes de uma temporada específica, com parâmetro `id`. */}
          <Route path="/temporada/:id" element={<Temporada />} />

          {/* Rota pública para a página de contato. */}
          <Route path="/contato" element={<Contato />} />

          {/* Rota protegida para cadastro de dados, acessível apenas para usuários autenticados. */}
          <Route path="/cadastro" element={<PrivateRoute element={<Cadastro onLogout={handleLogout} />} />} />

          {/* Rota pública para a página de biografia de personagens, com parâmetro `id`. */}
          <Route path="/bio/:id" element={<Bio />} />

          {/* Rota pública para a página de login. */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </ApiProvider>
  );
}

// Exporta o componente principal da aplicação.
export default App;

/**
 * Propósito do arquivo:
 * Este arquivo define a estrutura principal da aplicação React, configurando:
 * 1. Estilos globais (`GlobalStyles`).
 * 2. Roteamento da aplicação utilizando o React Router DOM.
 * 3. Rotas públicas e protegidas (através de `PrivateRoute`).
 * 4. Provedor de contexto da API (`ApiProvider`), permitindo o compartilhamento de dados globais.
 * Ele gerencia a navegação entre as páginas da aplicação e implementa um sistema de autenticação 
 * simples usando `sessionStorage` para proteger rotas específicas.
 */
