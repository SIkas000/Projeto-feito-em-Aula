// Importa o React e os hooks necessários para estados, referências e efeitos.
import React, { useState, useRef, useEffect } from "react";

// Importa a biblioteca axios para realizar requisições HTTP.
import axios from 'axios';

// Importa os componentes estilizados para o formulário.
import { Form, Input, TextArea, Button, CharacterCount, FileInput } from '../styles/CadastroFormStyle';

// Importa o contexto para obter a URL base da API.
import { useApiUrl } from '../context/ApiContext';

// Componente funcional para o formulário de cadastro de personagens.
function PersonagemForm({ setRefresh, editPersonagem, setEditPersonagem }) {
    // Estados para armazenar os valores do formulário.
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [imagem, setImagem] = useState(null);

    // Estado para forçar a redefinição do campo de upload de arquivo.
    const [FileInputKey, setFileInputKey] = useState(Date.now());

    // Limite máximo de caracteres para a descrição.
    const MAX_DESC_LENGTH = 500;

    // Referência ao formulário.
    const formRef = useRef(null);

    // Obtém a URL base da API a partir do contexto.
    const apiUrl = useApiUrl();

    // Efeito para preencher os campos ao editar um personagem ou resetar o formulário.
    useEffect(() => {
        if (editPersonagem) {
            // Preenche os campos com os dados do personagem em edição.
            setNome(editPersonagem.nome);
            setDescricao(editPersonagem.descricao);
            setImagem(null);
        } else {
            // Reseta os campos caso não esteja editando.
            setNome('');
            setDescricao('');
            setImagem(null);
            setFileInputKey(Date.now()); // Força a redefinição do campo de upload.
        }
    }, [editPersonagem]);

    // Função para lidar com o envio do formulário.
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Formulário enviado");

        // Cria um objeto FormData para enviar os dados do formulário.
        const formData = new FormData();
        formData.append('nome', nome);
        formData.append('descricao', descricao);
        if (imagem) {
            formData.append('foto', imagem);
        }

        try {
            if (editPersonagem) {
                // Atualiza o personagem existente.
                await axios.put(`${apiUrl}/api/personagens/${editPersonagem.id}`, formData, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                });
                setEditPersonagem(null); // Reseta o estado de edição.
            } else {
                // Cadastra um novo personagem.
                await axios.post(`${apiUrl}/api/personagens`, formData, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                });
            }
            // Reseta os campos do formulário após o envio.
            setNome('');
            setDescricao('');
            setImagem(null);
            setFileInputKey(Date.now());
            setRefresh((prev) => !prev); // Atualiza a lista de personagens.
        } catch (error) {
            console.error('Erro ao enviar o Personagem', error);
        }
    };

    // Função para lidar com a alteração do campo de upload de imagem.
    const handleImageChange = (event) => {
        setImagem(event.target.files[0]);
    };

    // Função para validar e atualizar o texto da descrição.
    const Handle_Description_Change = (e) => {
        const texto = e.target.value;
        if (texto.length <= MAX_DESC_LENGTH) {
            setDescricao(texto);
        }
    };

    return (
        <Form onSubmit={handleSubmit} ref={formRef}>
            {/* Campo para o nome do personagem. */}
            <Input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Nome do Personagem"
                required
            />
            {/* Campo para a descrição do personagem. */}
            <TextArea
                value={descricao}
                onChange={Handle_Description_Change}
                placeholder="Descrição do Personagem"
                required
            />
            {/* Contador de caracteres restantes para a descrição. */}
            <CharacterCount>{MAX_DESC_LENGTH - descricao.length} caracteres restantes</CharacterCount>
            {/* Campo para upload da imagem do personagem. */}
            <FileInput
                type="file"
                key={FileInputKey} // Força a redefinição do input após o envio.
                onChange={handleImageChange}
            />
            {/* Botão para enviar o formulário. */}
            <Button type="submit">Cadastrar</Button>
        </Form>
    );
}

// Exporta o componente para ser usado em outras partes da aplicação.
export default PersonagemForm;

/**
 * Propósito do arquivo:
 * Este arquivo define o componente `PersonagemForm`, que permite cadastrar ou editar personagens.
 * Ele utiliza:
 * 1. **`axios`**: Para enviar os dados do formulário para a API.
 * 2. **Estados (`useState`)**: Para gerenciar os valores dos campos do formulário.
 * 3. **`useEffect`**: Para preencher ou resetar os campos ao editar ou criar um personagem.
 * 4. **FormData**: Para enviar dados, incluindo imagens, para a API.
 * Este componente é projetado para facilitar a entrada de dados de forma validada e intuitiva, com suporte para edição.
 */
