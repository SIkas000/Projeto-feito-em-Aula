// Importa o React para criar o componente.
import React from 'react';

// Importa hooks do React Router DOM para acessar parâmetros de rota e navegação.
import { useParams, useNavigate } from 'react-router-dom';

// Importa componentes do cabeçalho e rodapé.
import Header from '../components/Header';
import Footer from '../components/Footer';

// Importa a biblioteca `styled-components` para estilização de componentes.
import styled from 'styled-components';

// Importa imagens das temporadas.
import imagem1 from '../assets/s1.jpg';
import imagem2 from '../assets/s2.jpg';
import imagem3 from '../assets/s3.jpg';
import imagem4 from '../assets/s4.jpg';
import imagem5 from '../assets/s5.jpg';
import imagem6 from '../assets/s6.jpg';
import imagem7 from '../assets/s7.jpg';
import imagem8 from '../assets/s8.jpg';
import imagem9 from '../assets/s9.jpg';

// Estilização do container principal da página.
const Container = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  text-align: center;
`;

// Estilização para a imagem da temporada.
const Image = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
`;

// Estilização para o título da temporada.
const Title = styled.h1`
  margin-top: 20px;
`;

// Estilização para a descrição da temporada.
const Description = styled.p`
  margin-top: 10px;
  font-size: 1.2rem;
`;

// Estilização para o botão de voltar.
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

// Componente principal da página de detalhes de uma temporada.
function Temporada() {
  // Obtém o parâmetro `id` da URL (o ID da temporada).
  const { id } = useParams();

  // Hook para navegar entre páginas.
  const navigate = useNavigate();

  // Dados das temporadas, incluindo título, descrição e imagem.
  const seasonData = {
    1: { title: '1º Temporada', description: 'Descrição da primeira temporada de The Office', img: imagem1 },
    2: { title: '2º Temporada', description: 'Descrição da segunda temporada de The Office', img: imagem2 },
    3: { title: '3º Temporada', description: 'Descrição da terceira temporada de The Office', img: imagem3 },
    4: { title: '4º Temporada', description: 'Descrição da quarta temporada de The Office', img: imagem4 },
    5: { title: '5º Temporada', description: 'Descrição da quinta temporada de The Office', img: imagem5 },
    6: { title: '6º Temporada', description: 'Descrição da sexta temporada de The Office', img: imagem6 },
    7: { title: '7º Temporada', description: 'Descrição da sétima temporada de The Office', img: imagem7 },
    8: { title: '8º Temporada', description: 'Descrição da oitava temporada de The Office', img: imagem8 },
    9: { title: '9º Temporada', description: 'Descrição da nona temporada de The Office', img: imagem9 },
  };

  // Obtém os dados da temporada com base no ID.
  const temporada = seasonData[id];

  // Função para voltar à página anterior.
  const handleBack = () => {
    navigate(-1); // Navega de volta para a página anterior na pilha de navegação.
  };

  return (
    <>
      {/* Renderiza o cabeçalho. */}
      <Header />

      {/* Container principal com os detalhes da temporada. */}
      <Container>
        {/* Exibe a imagem da temporada. */}
        <Image src={temporada.img} alt={temporada.title} />

        {/* Exibe o título da temporada. */}
        <Title>{temporada.title}</Title>

        {/* Exibe a descrição da temporada. */}
        <Description>{temporada.description}</Description>

        {/* Botão para voltar à página anterior. */}
        <Button onClick={handleBack}>Voltar</Button>
      </Container>

      {/* Renderiza o rodapé. */}
      <Footer />
    </>
  );
}

// Exporta o componente para ser usado em outras partes da aplicação.
export default Temporada;

/**
 * Propósito do arquivo:
 * Este arquivo define o componente da página "Temporada", que exibe os detalhes de uma temporada específica da série "The Office".
 * Ele utiliza:
 * 1. **useParams**: Para obter o ID da temporada diretamente da URL.
 * 2. **useNavigate**: Para implementar a funcionalidade de voltar à página anterior.
 * 3. **Dados locais**: Os detalhes das temporadas (título, descrição e imagem) são armazenados em um objeto local.
 * 4. **Styled Components**: Para criar estilos personalizados de forma modular e reutilizável.
 * A página é estruturada para exibir informações detalhadas de uma temporada, incluindo um botão para navegar de volta.
 */
