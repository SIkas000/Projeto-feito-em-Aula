// Importa `styled-components` para criar estilos personalizados.
import styled from 'styled-components';

// Importa o hook `useNavigate` do React Router DOM para navegação programática.
import { useNavigate } from 'react-router-dom';

// Estilização para o container principal que organiza as imagens.
const Container = styled.div`
  display: flex; // Organiza os elementos em linha.
  justify-content: center; // Centraliza os elementos horizontalmente.
  align-items: center; // Alinha os elementos verticalmente.
  margin-bottom: 80px;
  margin-top: 20px;
  padding-bottom: 20px;
`;

// Estilização para o container de cada imagem.
const ImageContainer = styled.div`
  width: 200px;
  height: 300px;
  margin: 0 10px;

  img {
    width: 100%; // Faz a imagem ocupar toda a largura disponível.
    height: 100%; // Faz a imagem ocupar toda a altura disponível.
    border-radius: 5px; // Bordas arredondadas.
    object-fit: cover; // Ajusta a imagem para cobrir o espaço sem distorção.
  }
`;

// Estilização para o texto exibido abaixo de cada imagem.
const Text = styled.p`
  text-align: center; // Centraliza o texto horizontalmente.
  margin: 10px 0; // Espaçamento acima e abaixo do texto.
`;

// Estilização para o botão.
const Button = styled.button`
  display: block; // Exibe o botão como um bloco.
  margin: 0 auto; // Centraliza o botão horizontalmente.
  padding: 10px 20px; // Espaçamento interno.
  border: none; // Remove a borda padrão.
  border-radius: 5px; // Bordas arredondadas.
  background-color: #007bff; // Cor de fundo azul.
  color: #fff; // Cor do texto branca.
  cursor: pointer; // Muda o cursor ao passar sobre o botão.
  &:hover {
    background-color: #394c73; // Cor de fundo ao passar o mouse.
  }
`;

// Componente funcional para exibir imagens com texto e botões.
function ImageText({ images }) {
  const navigate = useNavigate(); // Hook para navegação programática.

  return (
    <Container>
      {/* Mapeia as imagens recebidas como props e renderiza cada uma em um container. */}
      {images.map((image, index) => (
        <ImageContainer key={index}>
          {/* Exibe a imagem com texto e botão correspondente. */}
          <img src={image.src} alt={image.alt} />
          <Text>{image.text}</Text>
          {/* Botão que navega para a página da temporada correspondente ao ID. */}
          <Button onClick={() => navigate(`/temporada/${image.id}`)}>Saiba Mais</Button>
        </ImageContainer>
      ))}
    </Container>
  );
}

// Exporta o componente para ser usado em outras partes da aplicação.
export default ImageText;

/**
 * Propósito do arquivo:
 * Este arquivo define o componente `ImageText`, que exibe uma série de imagens com textos descritivos e botões.
 * Ele utiliza:
 * 1. **`useNavigate`**: Para implementar a navegação para uma página de detalhes específica de cada item.
 * 2. **Mapeamento dinâmico**: Cada imagem e texto é renderizado com base nos dados fornecidos via props.
 * 3. **Estilização personalizada**: Utiliza `styled-components` para criar um layout limpo e responsivo.
 * Este componente é projetado para exibir itens visuais com informações e uma ação clara ("Saiba Mais").
 */
