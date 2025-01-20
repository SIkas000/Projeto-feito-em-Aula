// Importa o React para criar o componente.
import React from 'react';

// Importa componentes reutilizáveis da aplicação.
import Header from '../components/Header'; // Cabeçalho da página.
import Footer from '../components/Footer'; // Rodapé da página.
import Banner from '../components/Banner'; // Banner principal da página.
import CadastroForm from '../components/CadastroForm'; // Formulário de cadastro de personagens.

// Importa a biblioteca `styled-components` para criar estilos personalizados.
import styled from 'styled-components';

// Estilização para o botão de logout.
const LogoutButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;

// Componente principal da página de cadastro.
function Cadastro({ onLogout }) {
  return (
    <div>
      {/* Renderiza o cabeçalho. */}
      <Header />

      {/* Renderiza o banner principal da página. */}
      <Banner />

      {/* Seção de título e botão de logout. */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Cadastro de Personagens</h2>
        {/* Botão de logout, que executa a função `onLogout` passada como propriedade. */}
        <LogoutButton onClick={onLogout}>Logout</LogoutButton>
      </div>

      {/* Renderiza o formulário de cadastro de personagens. */}
      <CadastroForm />

      {/* Renderiza o rodapé. */}
      <Footer />
    </div>
  );
}

// Exporta o componente para ser usado em outras partes da aplicação.
export default Cadastro;

/**
 * Propósito do arquivo:
 * Este arquivo define o componente da página "Cadastro", que permite aos usuários autenticados adicionar personagens ao sistema.
 * Ele utiliza:
 * 1. **Header e Footer**: Componentes para manter a consistência visual na aplicação.
 * 2. **Banner**: Um banner principal para destacar a página.
 * 3. **CadastroForm**: Um formulário que captura os dados dos personagens a serem cadastrados.
 * 4. **LogoutButton**: Um botão estilizado que permite ao usuário sair do sistema, chamando a função `onLogout`.
 * A página é projetada para gerenciar o cadastro de personagens, com uma interface simples e funcional.
 */
