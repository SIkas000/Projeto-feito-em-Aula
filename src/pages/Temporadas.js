// Importa o React para criar o componente.
import React from 'react';

// Importa o componente de cabeçalho da aplicação.
import Header from '../components/Header';

// Importa o componente de rodapé da aplicação.
import Footer from '../components/Footer';

// Importa o componente que renderiza os cartões das temporadas.
import TemporadasCard from '../components/TemporadasCard';

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

// Componente principal da página de temporadas.
function Temporadas() {
  // Lista das temporadas, com título, descrição e imagem associada.
  const seasons = [
    { id: 1, title: '1º Temporada', description: 'A primeira temporada de The Office.', img: imagem1 },
    { id: 2, title: '2º Temporada', description: 'A segunda temporada de The Office.', img: imagem2 },
    { id: 3, title: '3º Temporada', description: 'A terceira temporada de The Office.', img: imagem3 },
    { id: 4, title: '4º Temporada', description: 'A quarta temporada de The Office.', img: imagem4 },
    { id: 5, title: '5º Temporada', description: 'A quinta temporada de The Office.', img: imagem5 },
    { id: 6, title: '6º Temporada', description: 'A sexta temporada de The Office.', img: imagem6 },
    { id: 7, title: '7º Temporada', description: 'A sétima temporada de The Office.', img: imagem7 },
    { id: 8, title: '8º Temporada', description: 'A oitava temporada de The Office.', img: imagem8 },
    { id: 9, title: '9º Temporada', description: 'A nona temporada de The Office.', img: imagem9 },
  ];

  return (
    <div>
      {/* Renderiza o cabeçalho. */}
      <Header />

      {/* Renderiza o componente TemporadasCard, passando a lista de temporadas como propriedade (props). */}
      <TemporadasCard seasons={seasons} />

      {/* Renderiza o rodapé. */}
      <Footer />
    </div>
  );
}

// Exporta o componente para ser usado em outras partes da aplicação.
export default Temporadas;

/**
 * Propósito do arquivo:
 * Este arquivo define o componente da página "Temporadas", que exibe uma lista das temporadas da série "The Office".
 * Ele utiliza:
 * 1. **Header e Footer**: Componentes que encapsulam o cabeçalho e o rodapé da página.
 * 2. **TemporadasCard**: Componente responsável por renderizar os cartões com os detalhes das temporadas.
 * 3. **Imagens**: As imagens de cada temporada são importadas para uso no componente.
 * A página é estruturada de forma a exibir informações organizadas, com título, descrição e imagem para cada temporada.
 */
