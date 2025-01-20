// Importa o React e os hooks necessários para estados e efeitos.
import React, { useEffect, useState } from 'react';

// Importa a biblioteca axios para realizar requisições HTTP.
import axios from 'axios';

// Importa os estilos personalizados para a lista de personagens.
import {
    ListContainer,
    PersonagemCard,
    PersonagemImage,
    PersonagemInfo,
    PersonagemNome,
    PersonagemDescricao,
    Actions,
    ActionButton
} from '../styles/PersonagensListStyle';

// Importa o componente para editar personagens em um modal.
import EditPersonagemModal from './EditPersonagemModal';

// Importa o contexto para obter a URL base da API.
import { useApiUrl } from '../context/ApiContext';

// Componente funcional que exibe a lista de personagens.
function PersonagemList({ refresh, setRefresh }) {
    // Estado para armazenar os personagens buscados.
    const [personagens, setPersonagens] = useState([]);

    // Estado para armazenar o personagem que será editado.
    const [editPersonagem, setEditPersonagem] = useState(null);

    // Estado para controlar a visibilidade do modal de edição.
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Obtém a URL base da API a partir do contexto.
    const apiUrl = useApiUrl();

    // Efeito para buscar os personagens sempre que o estado `refresh` for alterado.
    useEffect(() => {
        fetchPersonagens();
    }, [refresh]);

    // Função para buscar a lista de personagens da API.
    const fetchPersonagens = async () => {
        try {
            const response = await axios.get(`${apiUrl}/api/personagens`);
            setPersonagens(response.data);
        } catch (error) {
            console.error('Erro ao buscar personagens', error);
        }
    };

    // Função para deletar um personagem pelo ID.
    const handleDelete = async (id) => {
        try {
            await axios.delete(`${apiUrl}/api/personagens/${id}`);
            fetchPersonagens(); // Atualiza a lista de personagens após a exclusão.
        } catch (error) {
            console.error('Erro ao deletar o personagem', error);
        }
    };

    // Função para buscar os dados de um personagem pelo ID e abrir o modal de edição.
    const handleEdit = async (id) => {
        try {
            const response = await axios.get(`${apiUrl}/api/personagens/${id}`);
            setEditPersonagem(response.data); // Configura o personagem para edição.
            setIsModalOpen(true); // Abre o modal.
        } catch (error) {
            console.error('Erro ao buscar o personagem', error);
        }
    };

    return (
        <ListContainer>
            {/* Mapeia e exibe cada personagem em um cartão estilizado. */}
            {personagens.map((personagem) => (
                <PersonagemCard key={personagem.id}>
                    {/* Exibe a imagem do personagem. */}
                    <PersonagemImage src={`${apiUrl}/uploads/${personagem.foto}`} alt={personagem.nome} />
                    <PersonagemInfo>
                        {/* Exibe o nome e a descrição do personagem. */}
                        <PersonagemNome>{personagem.nome}</PersonagemNome>
                        <PersonagemDescricao>{personagem.descricao}</PersonagemDescricao>
                        {/* Botões para deletar ou editar o personagem. */}
                        <Actions>
                            <ActionButton onClick={() => handleDelete(personagem.id)}>Deletar</ActionButton>
                            <ActionButton onClick={() => handleEdit(personagem.id)}>Editar</ActionButton>
                        </Actions>
                    </PersonagemInfo>
                </PersonagemCard>
            ))}

            {/* Modal de edição do personagem, exibido se um personagem foi selecionado. */}
            {editPersonagem && (
                <EditPersonagemModal
                    isOpen={isModalOpen} // Controla a visibilidade do modal.
                    onRequestClose={() => setIsModalOpen(false)} // Função para fechar o modal.
                    personagem={editPersonagem} // Passa os dados do personagem selecionado.
                    setRefresh={setRefresh} // Permite atualizar a lista de personagens.
                    setEditPersonagem={setEditPersonagem} // Limpa o estado após a edição.
                />
            )}
        </ListContainer>
    );
}

// Exporta o componente para ser usado em outras partes da aplicação.
export default PersonagemList;

/**
 * Propósito do arquivo:
 * Este arquivo define o componente `PersonagemList`, que exibe uma lista de personagens com funcionalidades para excluir e editar.
 * Ele utiliza:
 * 1. **`axios`**: Para buscar, deletar e editar personagens através da API.
 * 2. **`useEffect`**: Para carregar os personagens sempre que o estado `refresh` for alterado.
 * 3. **`EditPersonagemModal`**: Um modal para editar os detalhes de um personagem selecionado.
 * 4. **Estilização personalizada**: Para exibir cartões de personagens com informações organizadas e botões de ação.
 * Este componente oferece uma interface para gerenciar os personagens de forma prática e intuitiva.
 */
