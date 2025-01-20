// Importa o React e os hooks necessários para gerenciar estados e efeitos.
import React, { useEffect, useState } from 'react';

// Importa `styled-components` para criar estilos personalizados.
import styled from 'styled-components';

// Importa a biblioteca axios para realizar requisições HTTP.
import axios from 'axios';

// Importa o contexto para obter a URL base da API.
import { useApiUrl } from '../context/ApiContext';

// Estilização do fundo do modal.
const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Estilização do container principal do modal.
const ModalContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  max-width: 400px;
  position: relative;
`;

// Estilização para o título do modal.
const ModalTitle = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`;

// Estilização para os campos de entrada no formulário.
const StyledInput = styled.input`
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
`;

// Estilização para o agrupamento de botões.
const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

// Estilização do botão de envio.
const SubmitButton = styled.button`
  width: 48%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// Estilização do botão de cancelar.
const CancelButton = styled.button`
  width: 48%;
  padding: 10px;
  background-color: #ccc;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #aaa;
  }
`;

// Componente funcional para o modal de cadastro de usuários.
const CadastroModal = ({ onClose }) => {
  // Estados para capturar os dados do formulário.
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState(''); // Estado para exibir mensagens de erro.

  // Obtém a URL base da API a partir do contexto.
  const apiUrl = useApiUrl();

  // Função para fechar o modal ao pressionar a tecla Escape.
  const handleEscape = (e) => {
    if (e.key === 'Escape') onClose();
  };

  // Fecha o modal ao clicar fora do conteúdo.
  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  // Função para enviar os dados do formulário para a API.
  const registerUser = async () => {
    try {
      // Faz uma requisição POST para cadastrar o usuário.
      await axios.post(`${apiUrl}/auth/register`, {
        nome,
        email,
        senha,
      });
      alert('Usuário cadastrado com sucesso!'); // Exibe uma mensagem de sucesso.
      onClose(); // Fecha o modal.
    } catch (error) {
      setError('Erro ao cadastrar usuário. Tente novamente.'); // Exibe uma mensagem de erro.
    }
  };

  // Função para lidar com o envio do formulário.
  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser();
  };

  // Adiciona um listener para a tecla Escape ao montar o componente.
  useEffect(() => {
    document.addEventListener('keydown', handleEscape);

    // Remove o listener ao desmontar o componente.
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <ModalBackground onClick={handleBackgroundClick}>
      <ModalContainer>
        <ModalTitle>Cadastrar</ModalTitle>
        <form onSubmit={handleSubmit}>
          {/* Campo para o nome do usuário. */}
          <StyledInput
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          {/* Campo para o e-mail do usuário. */}
          <StyledInput
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* Campo para a senha do usuário. */}
          <StyledInput
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          {/* Exibe uma mensagem de erro, se houver. */}
          {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
          <ButtonGroup>
            <SubmitButton type="submit">Cadastrar</SubmitButton>
            <CancelButton onClick={onClose}>Cancelar</CancelButton>
          </ButtonGroup>
        </form>
      </ModalContainer>
    </ModalBackground>
  );
};

// Exporta o componente para ser usado em outras partes da aplicação.
export default CadastroModal;

/**
 * Propósito do arquivo:
 * Este arquivo define o componente `CadastroModal`, que exibe um modal para cadastrar novos usuários.
 * Ele utiliza:
 * 1. **`axios`**: Para enviar os dados do formulário para a API.
 * 2. **`useState`**: Para gerenciar os dados inseridos pelo usuário e exibir mensagens de erro.
 * 3. **`useEffect`**: Para fechar o modal ao pressionar a tecla Escape.
 * 4. **Estilização com `styled-components`**: Para criar uma interface estilizada e responsiva.
 * O modal é projetado para permitir que novos usuários se cadastrem de forma simples e rápida.
 */
