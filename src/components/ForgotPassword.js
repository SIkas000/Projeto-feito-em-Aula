// Importa o React e o hook `useEffect` para manipular efeitos colaterais.
import React, { useEffect } from 'react';

// Importa `styled-components` para criar estilos personalizados para os componentes.
import styled from 'styled-components';

// Estilização para o fundo do modal.
const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5); // Fundo semitransparente.
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

// Estilização do título do modal.
const ModalTitle = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`;

// Estilização para o campo de entrada de texto.
const StyledInput = styled.input`
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
`;

// Estilização para o agrupamento de botões no modal.
const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

// Estilização do botão de enviar.
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

// Componente funcional para o modal de recuperação de senha.
const EsqueceuSenhaModal = ({ onClose }) => {
  // Fecha o modal ao pressionar a tecla Escape.
  const handleEscape = (e) => {
    if (e.key === 'Escape') onClose();
  };

  // Fecha o modal ao clicar no fundo, mas não no conteúdo.
  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) onClose();
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
        <ModalTitle>Recuperar Senha</ModalTitle>
        <p>Insira seu e-mail para recuperar a senha.</p>
        <StyledInput type="email" placeholder="Seu e-mail" />
        <ButtonGroup>
          <SubmitButton>Enviar</SubmitButton>
          <CancelButton onClick={onClose}>Cancelar</CancelButton>
        </ButtonGroup>
      </ModalContainer>
    </ModalBackground>
  );
};

// Exporta o componente para ser usado em outras partes da aplicação.
export default EsqueceuSenhaModal;

/**
 * Propósito do arquivo:
 * Este arquivo define o componente `EsqueceuSenhaModal`, um modal estilizado que permite aos usuários
 * inserir o e-mail para recuperação de senha.
 * Ele utiliza:
 * 1. **`useEffect`**: Para detectar a tecla Escape e fechar o modal.
 * 2. **`styled-components`**: Para criar uma interface estilizada, incluindo o fundo semitransparente e os botões.
 * 3. **Eventos de clique**: Para fechar o modal ao clicar fora do conteúdo.
 * O modal é projetado para ser acessível e funcional, com suporte para interações com teclado e mouse.
 */
