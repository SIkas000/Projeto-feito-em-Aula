// Importa o React e hooks necessários.
import React, { useEffect, useState } from 'react';

// Importa hooks do React Router DOM para acessar parâmetros de rota e navegação.
import { useParams, useNavigate } from 'react-router-dom';

// Importa a biblioteca `axios` para realizar requisições HTTP.
import axios from 'axios';

// Importa `styled-components` para estilizar componentes.
import styled from 'styled-components';

// Importa o contexto para obter a URL base da API.
import { useApiUrl } from '../context/ApiContext';

// Estilização para o container principal.
const Container = styled.div`
  max-width: 1000px;
  margin: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Estilização para o conteúdo, incluindo imagem e descrição.
const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  gap: 20px;
  margin-bottom: 20px;
  background: #fff;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

// Estilização para a imagem do personagem.
const Image = styled.img`
  flex-shrink: 0;
  width: 300px;
  height: auto;
  border-radius: 10px;
`;

// Estilização para o container de texto.
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

// Estilização para os parágrafos de texto.
const Text = styled.p`
  text-align: justify;
`;

// Estilização para o título do personagem.
const Title = styled.h2`
  text-align: left;
`;

// Estilização para o botão "Voltar".
const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007BFF;
  color: white;
  cursor: pointer;
  align-self: flex-start;
  &:hover {
    background-color: #394c73;
  }
`;

// Componente principal que exibe os detalhes de um personagem.
function BioContent() {
  // Obtém o ID do personagem a partir dos parâmetros da URL.
  const { id } = useParams();

  // Hook para navegar entre páginas.
  const navigate = useNavigate();

  // Estado para armazenar os dados do personagem.
  const [character, setCharacter] = useState(null);

  // Obtém a URL base da API do contexto.
  const apiUrl = useApiUrl();

  // Efeito para buscar os dados do personagem quando o componente é montado.
  useEffect(() => {
    const fetchedCharacter = async () => {
      try {
        // Faz uma requisição GET para buscar os dados do personagem pelo ID.
        const response = await axios.get(`${apiUrl}/api/personagens/${id}`);
        setCharacter(response.data); // Atualiza o estado com os dados do personagem.
      } catch (error) {
        console.error('Erro ao buscar o personagem', error); // Exibe erro no console, se houver.
      }
    };
    fetchedCharacter();
  }, [id, apiUrl]); // Executa novamente se o ID ou a URL da API mudar.

  // Função para voltar à página anterior.
  const handleBack = () => {
    navigate(-1);
  };

  // Verifica se os dados do personagem foram carregados. Exibe uma mensagem se não encontrados.
  if (!character) {
    return <div>Personagem não encontrado.</div>;
  }

  return (
    <div>
      <Container>
        <Content>
          {/* Renderiza a imagem do personagem com sua descrição. */}
          <Image src={`${apiUrl}/uploads/${character.foto}`} alt={character.nome} />
          <TextContainer>
            {/* Exibe o nome e a descrição do personagem. */}
            <Title>{character.nome}</Title>
            <Text>{character.descricao}</Text>
            {/* Botão para voltar à página anterior. */}
            <Button onClick={handleBack}>Voltar</Button>
          </TextContainer>
        </Content>
      </Container>
    </div>
  );
}

// Exporta o componente para ser usado em outras partes da aplicação.
export default BioContent;

/**
 * Propósito do arquivo:
 * Este arquivo define o componente `BioContent`, que exibe os detalhes de um personagem específico.
 * Ele utiliza:
 * 1. **`useParams` e `useNavigate`**: Para acessar o ID do personagem na URL e implementar a navegação.
 * 2. **`axios`**: Para buscar os dados do personagem através de uma requisição HTTP para a API.
 * 3. **`useState` e `useEffect`**: Para gerenciar o estado dos dados e buscar o personagem ao montar o componente.
 * 4. **Styled Components**: Para criar uma interface estilizada, incluindo imagem, texto e botão de navegação.
 * A página exibe a imagem, nome e descrição do personagem, além de um botão para voltar à página anterior.
 */
