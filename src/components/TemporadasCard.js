// Importa `styled-components` para criar estilos personalizados.
import styled from 'styled-components';

// Importa o hook `useNavigate` do React Router DOM para navegação programática.
import { useNavigate } from 'react-router-dom';

// Estilização do container principal que organiza os cartões de temporadas.
const Container = styled.div`
  max-width: 1000px;
  margin: 20px auto; // Centraliza o container horizontalmente.
  padding: 20px;
  display: grid; // Usa um layout de grid para organizar os itens.
  grid-template-columns: repeat(3, 1fr); // Divide o espaço em 3 colunas iguais.
  gap: 20px; // Espaçamento entre os itens.
`;

// Estilização de cada cartão de temporada.
const Card = styled.div`
  border: 1px solid #ddd; // Borda cinza clara.
  border-radius: 8px; // Bordas arredondadas.
  overflow: hidden; // Garante que os elementos internos não ultrapassem o limite do cartão.
  background-color: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); // Sombra leve para destacar o cartão.
`;

// Estilização da imagem do cartão.
const Image = styled.img`
  width: 100%; // Faz a imagem ocupar toda a largura do cartão.
  height: 250px; // Altura fixa para uniformizar o tamanho dos cartões.
  object-fit: cover; // Ajusta a imagem para cobrir o espaço sem distorção.
`;

// Estilização do conteúdo do cartão.
const Content = styled.div`
  padding: 15px;
  text-align: center; // Centraliza o texto no cartão.
`;

// Estilização do título da temporada.
const Title = styled.h2`
  font-size: 1.5rem; // Tamanho da fonte grande para o título.
  margin-bottom: 10px; // Espaçamento inferior.
`;

// Estilização da descrição da temporada.
const Description = styled.p`
  font-size: 1rem; // Tamanho da fonte padrão.
  margin-bottom: 15px; // Espaçamento inferior.
`;

// Estilização do botão "Saiba Mais".
const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff; // Cor de fundo azul.
  color: #fff; // Cor do texto branca.
  border: none; // Remove a borda padrão.
  border-radius: 5px; // Bordas arredondadas.
  cursor: pointer; // Define o cursor como "mão" ao passar sobre o botão.

  &:hover {
    background-color: #394c73; // Cor de fundo ao passar o mouse.
  }
`;

// Componente funcional que exibe os cartões das temporadas.
function TemporadasCard({ seasons }) {
  const navigate = useNavigate(); // Hook para navegação programática.

  return (
    <Container>
      {/* Mapeia as temporadas recebidas como props e renderiza cada uma em um cartão. */}
      {seasons.map((season) => (
        <Card key={season.id}>
          {/* Exibe a imagem da temporada. */}
          <Image src={season.img} alt={season.title} />
          {/* Exibe o título e a descrição da temporada, além do botão para navegar. */}
          <Content>
            <Title>{season.title}</Title>
            <Description>{season.description}</Description>
            <Button onClick={() => navigate(`/temporada/${season.id}`)}>Saiba Mais</Button>
          </Content>
        </Card>
      ))}
    </Container>
  );
}

// Exporta o componente para ser usado em outras partes da aplicação.
export default TemporadasCard;

/**
 * Propósito do arquivo:
 * Este arquivo define o componente `TemporadasCard`, que exibe uma grade de cartões com as informações das temporadas.
 * Ele utiliza:
 * 1. **`useNavigate`**: Para implementar a navegação para a página de detalhes de cada temporada.
 * 2. **Estilização com `styled-components`**: Para criar uma interface organizada e visualmente atraente.
 * 3. **Mapeamento dinâmico**: Renderiza os cartões com base nas temporadas fornecidas como props.
 * Este componente é ideal para apresentar as temporadas de forma clara, com informações resumidas e links para detalhes.
 */
