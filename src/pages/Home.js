// Importa o React e os hooks `useEffect` e `useState` para gerenciar estados e efeitos.
import React, { useEffect, useState } from 'react';

// Importa os componentes reutilizáveis da aplicação.
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import ImageText from '../components/ImageText';

// Importa as imagens das temporadas.
import imagem1 from '../assets/s1.jpg';
import imagem2 from '../assets/s2.jpg';
import imagem3 from '../assets/s3.jpg';
import imagem4 from '../assets/s4.jpg';
import imagem5 from '../assets/s5.jpg';
import imagem6 from '../assets/s6.jpg';
import imagem7 from '../assets/s7.jpg';
import imagem8 from '../assets/s8.jpg';
import imagem9 from '../assets/s9.jpg';

// Componente principal da página inicial.
function Home() {
  // Lista de todas as temporadas, cada uma com imagem, texto e ID.
  const allSeasons = [
    { id: 1, src: imagem1, alt: '1º Temporada', text: '1º Temporada' },
    { id: 2, src: imagem2, alt: '2º Temporada', text: '2º Temporada' },
    { id: 3, src: imagem3, alt: '3º Temporada', text: '3º Temporada' },
    { id: 4, src: imagem4, alt: '4º Temporada', text: '4º Temporada' },
    { id: 5, src: imagem5, alt: '5º Temporada', text: '5º Temporada' },
    { id: 6, src: imagem6, alt: '6º Temporada', text: '6º Temporada' },
    { id: 7, src: imagem7, alt: '7º Temporada', text: '7º Temporada' },
    { id: 8, src: imagem8, alt: '8º Temporada', text: '8º Temporada' },
    { id: 9, src: imagem9, alt: '9º Temporada', text: '9º Temporada' },
  ];

  // Estado local para armazenar as temporadas em destaque (inicia com as 3 primeiras).
  const [highlightedSeasons, setHighlightedSeasons] = useState(allSeasons.slice(0, 3));

  // Efeito para rotacionar as temporadas em destaque a cada 3 segundos.
  useEffect(() => {
    // Função para alternar os conjuntos de 3 temporadas em destaque.
    const rotateSeasons = () => {
      setHighlightedSeasons((prevSeasons) => {
        // Localiza o índice da primeira temporada atualmente exibida.
        const currentIndex = allSeasons.findIndex((s) => s.id === prevSeasons[0].id);

        // Calcula o índice do próximo conjunto de 3 temporadas, com rotação circular.
        const nextIndex = (currentIndex + 3) % allSeasons.length;

        // Retorna as próximas 3 temporadas para exibição.
        return allSeasons.slice(nextIndex, nextIndex + 3);
      });
    };

    // Configura um intervalo para alternar os destaques a cada 3 segundos.
    const interval = setInterval(rotateSeasons, 3000);

    // Limpa o intervalo ao desmontar o componente para evitar problemas de desempenho.
    return () => clearInterval(interval);
  }, [allSeasons]);

  return (
    <div>
      {/* Renderiza o cabeçalho da página. */}
      <Header />

      {/* Renderiza o banner principal. */}
      <Banner />

      {/* Renderiza o componente de imagens e textos com as temporadas em destaque. */}
      <ImageText images={highlightedSeasons} />

      {/* Renderiza o rodapé da página. */}
      <Footer />
    </div>
  );
}

// Exporta o componente para uso em outras partes da aplicação.
export default Home;

/**
 * Propósito do arquivo:
 * Este arquivo define o componente da página inicial "Home", que exibe um destaque rotativo de 3 temporadas de "The Office".
 * Ele utiliza:
 * 1. **useState**: Para gerenciar as temporadas atualmente destacadas.
 * 2. **useEffect**: Para configurar a alternância automática dos destaques em intervalos regulares.
 * 3. **Imagem e Texto**: As temporadas são exibidas com imagens e textos associados através do componente `ImageText`.
 * A página inicial combina interatividade e visual atraente, atualizando os destaques de forma contínua para manter o usuário engajado.
 */
