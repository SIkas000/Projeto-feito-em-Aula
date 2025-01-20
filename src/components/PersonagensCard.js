// Importa `styled-components` para criar estilos personalizados.
import styled from 'styled-components';

// Importa o hook `useNavigate` do React Router DOM para navegação programática.
import { useNavigate } from 'react-router-dom';

// Importa o contexto para obter a URL base da API.
import { useApiUrl } from '../context/ApiContext';

// Estilização do container principal que organiza os cartões de personagens.
const Container = styled.div`
  max-width: 1000px;
  margin: auto;
  padding: 10px;
  display: flex;
  flex-wrap: wrap; // Permite que os itens quebrem linha quando necessário.
  justify-content: space-around; // Espaça os itens uniformemente.
  gap: 20px; // Espaçamento entre os cartões.
`;

// Estilização para o título principal da página.
const MainTitle = styled.h1`
  text-align: center;
  margin: 40px 0;
`;

// Estilização de cada cartão que exibe um personagem.
const ImageCard = styled.div`
  width: calc(33.333% - 20px); // Cada cartão ocupa um terço do container com margem.
  display: flex;
  flex-direction: column; // Exibe os itens em coluna.
  align-items: center; // Alinha os itens horizontalmente ao centro.
  margin-bottom: 30px;
`;

// Estilização para a imagem do personagem.
const StyledImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%; // Faz a imagem ficar circular.
  border: 5px solid #007BFF; // Adiciona uma borda azul ao redor da imagem.
  object-fit: cover; // Ajusta a imagem para cobrir o espaço sem distorção.
  margin-bottom: 10px;
`;

// Estilização para o nome do personagem.
const SubTitle = styled.h2`
  color: #007BFF; // Define a cor azul para o título.
  text-align: center;
  margin: 0 0 5px 0; // Margem inferior para separar do próximo elemento.
`;

// Estilização para a descrição do personagem.
const Description = styled.p`
  text-align: center;
  margin-bottom: 10px;
  flex: 1; // Faz com que o texto ocupe o espaço restante.
`;

// Estilização para o botão "Saiba mais".
const Button = styled.button`
  width: 50%; // Define a largura do botão como metade do container.
  padding: 10px 20px;
  border: none;
  border-radius: 5px; // Bordas arredondadas.
  background-color: #007BFF; // Cor de fundo azul.
  color: white; // Cor do texto branca.
  cursor: pointer; // Define o cursor como "mão" ao passar sobre o botão.
  margin-top: auto; // Adiciona espaçamento automático para empurrar o botão para baixo.

  &:hover {
    background-color: #394c73; // Cor de fundo ao passar o mouse.
  }
`;

// Componente funcional que exibe os cartões de personagens.
function PersonagensCard({ characters }) {
  const navigate = useNavigate(); // Hook para navegação programática.
  const apiUrl = useApiUrl(); // Obtém a URL base da API a partir do contexto.

  // Função para navegar para a página de detalhes do personagem.
  const handleLearnMore = (id) => {
    navigate(`/bio/${id}`);
  };

  return (
    <div>
      {/* Título principal da seção de personagens. */}
      <MainTitle>Personagens</MainTitle>
      <Container>
        {/* Mapeia os personagens recebidos como props e renderiza seus cartões. */}
        {characters.map((character) => (
          <ImageCard key={character.id}>
            {/* Exibe a imagem do personagem usando a URL da API. */}
            <StyledImage src={`${apiUrl}/uploads/${character.foto}`} alt={character.nome} />
            {/* Exibe o nome e a descrição do personagem. */}
            <SubTitle>{character.nome}</SubTitle>
            <Description>{character.descricao}</Description>
            {/* Botão para acessar mais detalhes sobre o personagem. */}
            <Button onClick={() => handleLearnMore(character.id)}>Saiba mais</Button>
          </ImageCard>
        ))}
      </Container>
    </div>
  );
}

// Exporta o componente para ser usado em outras partes da aplicação.
export default PersonagensCard;

/**
 * Propósito do arquivo:
 * Este arquivo define o componente `PersonagensCard`, que exibe uma grade de personagens com suas informações básicas e um botão para detalhes.
 * Ele utiliza:
 * 1. **`useNavigate`**: Para implementar a navegação para a página de detalhes de cada personagem.
 * 2. **`useApiUrl`**: Para construir dinamicamente as URLs das imagens a partir da API.
 * 3. **Estilização com `styled-components`**: Para criar uma interface visual organizada e responsiva.
 * Este componente é ideal para exibir uma lista de personagens com informações rápidas e opções de interação.
 */
