// Importa o React para criar o componente.
import React from 'react';

// Importa componentes reutilizáveis da aplicação.
import BioContent from '../components/BioContent'; // Conteúdo detalhado da biografia do personagem.
import Header from '../components/Header'; // Cabeçalho da página.
import Banner from '../components/Banner'; // Banner principal da página.
import Footer from '../components/Footer'; // Rodapé da página.

// Componente principal da página de biografia.
function Bio() {
  return (
    <div>
      {/* Renderiza o cabeçalho da página. */}
      <Header />

      {/* Renderiza o banner principal da página. */}
      <Banner />

      {/* Renderiza o conteúdo da biografia do personagem. */}
      <BioContent />

      {/* Renderiza o rodapé da página. */}
      <Footer />
    </div>
  );
}

// Exporta o componente para ser usado em outras partes da aplicação.
export default Bio;

/**
 * Propósito do arquivo:
 * Este arquivo define o componente da página "Bio", que exibe a biografia detalhada de um personagem específico.
 * Ele utiliza:
 * 1. **Header e Footer**: Componentes que encapsulam o cabeçalho e o rodapé da página.
 * 2. **Banner**: Um banner visual que destaca a página.
 * 3. **BioContent**: Componente que exibe as informações detalhadas do personagem selecionado.
 * A página é projetada para fornecer uma visão aprofundada sobre um personagem, mantendo a consistência visual com o restante da aplicação.
 */
