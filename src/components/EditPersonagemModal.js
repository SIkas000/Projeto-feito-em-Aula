// Importa o React e os hooks necessários para estados e efeitos.
import React, { useState, useEffect } from 'react';

// Importa o componente Modal para criar janelas modais.
import Modal from 'react-modal';

// Importa a biblioteca axios para realizar requisições HTTP.
import axios from 'axios';

// Importa `styled-components` para criar componentes estilizados.
import styled from 'styled-components';

// Importa o contexto para obter a URL base da API.
import { useApiUrl } from '../context/ApiContext';

// Define o elemento principal do modal (o root da aplicação).
Modal.setAppElement('#root');

// Estilizações para o conteúdo do modal.
const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  max-width: 500px;
  margin: 0 auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

// Estilização para o título do modal.
const ModalHeader = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`;

// Estilização para o formulário dentro do modal.
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

// Estilização para os campos de entrada no formulário.
const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

// Estilização para o campo de texto (textarea).
const Textarea = styled.textarea`
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  resize: none;
`;

// Estilização para o botão principal.
const Button = styled.button`
  padding: 10px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007BFF;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #394c73;
  }
`;

// Estilização para o botão de cancelar.
const CancelButton = styled(Button)`
  background-color: #ccc;

  &:hover {
    background-color: #999;
  }
`;

// Estilização para o contador de caracteres restantes.
const CharacterCount = styled.div`
  text-align: right;
  margin-bottom: 10px;
  color: #666;
`;

// Componente principal do modal para editar personagens.
function EditPersonagemModal({ isOpen, onRequestClose, personagem, setRefresh, setEditPersonagem }) {
  // Estados para armazenar os valores do formulário.
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [imagem, setImagem] = useState(null);

  // Constante para definir o limite máximo de caracteres da descrição.
  const MAX_DESC_LENGTH = 500;

  // Obtém a URL base da API a partir do contexto.
  const apiUrl = useApiUrl();

  // Efeito para preencher os campos do formulário ao abrir o modal com um personagem selecionado.
  useEffect(() => {
    if (personagem) {
      setNome(personagem.nome);
      setDescricao(personagem.descricao);
    }
  }, [personagem]);

  // Função para tratar o envio do formulário e atualizar os dados do personagem.
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Cria um objeto FormData para enviar os dados, incluindo arquivos.
    const formData = new FormData();
    if (nome) formData.append('nome', nome);
    if (descricao) formData.append('descricao', descricao);
    if (imagem) formData.append('foto', imagem);

    try {
      // Faz uma requisição PUT para atualizar o personagem.
      await axios.put(`${apiUrl}/api/personagens/${personagem.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Atualiza a lista de personagens e fecha o modal.
      setRefresh((prev) => !prev);
      setEditPersonagem(null);
      onRequestClose();
    } catch (error) {
      console.error('Erro ao atualizar o personagem', error);
    }
  };

  // Função para tratar a mudança da imagem no formulário.
  const handleImageChange = (event) => {
    setImagem(event.target.files[0]);
  };

  // Função para limitar o número de caracteres da descrição.
  const handleDescricaoChange = (e) => {
    const texto = e.target.value;
    if (texto.length <= MAX_DESC_LENGTH) {
      setDescricao(texto);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Editar Personagem"
      style={{
        content: {
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          border: 'none',
          background: 'none',
          padding: '0',
        },
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
      }}
    >
      <ModalContent>
        {/* Cabeçalho do modal. */}
        <ModalHeader>Editar Personagem</ModalHeader>

        {/* Formulário para editar os dados do personagem. */}
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Nome do personagem"
          />
          <Textarea
            value={descricao}
            onChange={handleDescricaoChange}
            placeholder="Descrição do personagem"
            rows="4"
          />
          <CharacterCount>
            {MAX_DESC_LENGTH - (descricao?.length || 0)} caracteres restantes
          </CharacterCount>
          <Input type="file" onChange={handleImageChange} />
          <Button type="submit">Atualizar</Button>
          <CancelButton type="button" onClick={onRequestClose}>
            Cancelar
          </CancelButton>
        </Form>
      </ModalContent>
    </Modal>
  );
}

export default EditPersonagemModal;

/**
 * Propósito do arquivo:
 * Este arquivo define o componente `EditPersonagemModal`, um modal que permite editar informações de um personagem.
 * Ele utiliza:
 * 1. **`Modal`**: Para exibir uma janela modal estilizada.
 * 2. **Estados (`useState`)**: Para gerenciar os valores dos campos do formulário e a imagem selecionada.
 * 3. **`useEffect`**: Para preencher os campos do formulário quando um personagem é selecionado.
 * 4. **`axios`**: Para enviar os dados do formulário à API e atualizar o personagem.
 * O modal inclui validação de descrição, suporte a upload de imagens e ações de atualizar ou cancelar alterações.
 */
