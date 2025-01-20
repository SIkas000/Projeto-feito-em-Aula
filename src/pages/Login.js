// Importa o React e hooks necessários.
import React, { useState, useEffect } from 'react';

// Importa o hook `useNavigate` para navegação programática.
import { useNavigate } from 'react-router-dom';

// Importa a biblioteca `styled-components` para criar componentes estilizados.
import styled from 'styled-components';

// Importa a biblioteca `axios` para realizar requisições HTTP.
import axios from 'axios';

// Importa componentes reutilizáveis da aplicação.
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import EsqueceuSenhaModal from '../components/ForgotPassword';
import CadastroModal from '../components/RegisterUser';

// Importa o contexto para obter a URL base da API.
import { useApiUrl } from '../context/ApiContext';

// Estilização para o container principal da página de login.
const LoginPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;
`;

// Estilização do formulário de login.
const LoginFormContainer = styled.div`
  background-color: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

// Estilização do título da página de login.
const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

// Estilização dos campos de entrada (login e senha).
const Input = styled.input`
  display: block;
  width: 100%;
  padding: 15px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
`;

// Estilização para o campo de senha e botão de alternar visibilidade.
const PasswordWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 10px;
`;

// Estilização do botão de alternar visibilidade da senha.
const ToggleButton = styled.button`
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
  font-size: 14px;
  padding: 0;
`;

// Estilização do botão principal (Entrar).
const Button = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-bottom: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

// Estilização do link para ações adicionais (ex.: cadastro).
const Link = styled.a`
  display: block;
  text-align: center;
  margin-top: 10px;
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

// Estilização da mensagem de erro.
const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  text-align: center;
  margin-bottom: 10px;
`;

// Componente principal da página de login.
function Login() {
  // Estado para alternar visibilidade da senha.
  const [showPassword, setShowPassword] = useState(false);

  // Estados para armazenar login, senha e mensagens de erro.
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Estados para controlar modais de "esqueceu a senha" e cadastro.
  const [isEsqueceuSenhaModalOpen, setEsqueceuSenhaModalOpen] = useState(false);
  const [isCadastroModalOpen, setCadastroModalOpen] = useState(false);

  // Hook para navegação programática.
  const navigate = useNavigate();

  // Obtém a URL base da API através do contexto.
  const apiUrl = useApiUrl();

  // Verifica se o usuário já está autenticado e redireciona para a página de cadastro.
  useEffect(() => {
    const isAuthenticated = sessionStorage.getItem('isAuthenticated') === 'true';
    if (isAuthenticated) {
      navigate('/cadastro', { replace: true });
    }
  }, [navigate]);

  // Função para alternar a visibilidade da senha.
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Função para lidar com o login do usuário.
  const handleLoginClick = async (e) => {
    e.preventDefault();

    // Verifica se os campos estão preenchidos.
    if (!login || !password) {
      setErrorMessage('Por favor, insira o login e a senha.');
      return;
    }

    try {
      // Realiza a requisição para autenticar o usuário.
      const response = await axios.post(`${apiUrl}/auth/login`, {
        email: login,
        senha: password,
      });

      // Caso o login seja bem-sucedido, armazena a autenticação e redireciona.
      if (response.data.auth) {
        sessionStorage.setItem('isAuthenticated', 'true');
        navigate('/cadastro', { replace: true });
      } else {
        setErrorMessage('Login ou senha incorretos.');
      }
    } catch (error) {
      // Em caso de erro na requisição, exibe uma mensagem de erro.
      setErrorMessage('Erro ao autenticar. Tente novamente.');
    }
  };

  return (
    <>
      {/* Renderiza o cabeçalho. */}
      <Header />

      {/* Renderiza o banner principal. */}
      <Banner />

      {/* Container principal da página de login. */}
      <LoginPageContainer>
        <LoginFormContainer>
          {/* Título do formulário de login. */}
          <Title>Login</Title>

          {/* Exibe a mensagem de erro, se houver. */}
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

          {/* Campo de entrada para o login. */}
          <Input
            type="text"
            placeholder="Login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />

          {/* Campo de entrada para a senha, com opção de alternar visibilidade. */}
          <PasswordWrapper>
            <Input
              type={showPassword ? 'text' : 'password'}
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <ToggleButton onClick={togglePasswordVisibility}>
              {showPassword ? 'Esconder' : 'Mostrar'}
            </ToggleButton>
          </PasswordWrapper>

          {/* Botão para enviar os dados de login. */}
          <Button type="submit" onClick={handleLoginClick}>
            Entrar
          </Button>

          {/* Link para abrir o modal de cadastro. */}
          <Link href="#" onClick={() => setCadastroModalOpen(true)}>
            Fazer cadastro
          </Link>
        </LoginFormContainer>
      </LoginPageContainer>

      {/* Renderiza o rodapé. */}
      <Footer />

      {/* Modais de ações adicionais. */}
      {isCadastroModalOpen && <CadastroModal onClose={() => setCadastroModalOpen(false)} />}
    </>
  );
}

export default Login;

/**
 * Propósito do arquivo:
 * Este arquivo define o componente da página "Login", que permite que os usuários se autentiquem no sistema.
 * Ele utiliza:
 * 1. **useState e useEffect**: Para gerenciar estados e efeitos colaterais (ex.: redirecionamento).
 * 2. **axios**: Para realizar requisições à API para autenticação.
 * 3. **useNavigate**: Para navegação programática em caso de autenticação bem-sucedida.
 * 4. **Styled Components**: Para estilizar os elementos da página de forma modular.
 * A página inclui validação de campos, mensagens de erro, exibição de senha e modais para ações como cadastro.
 */
