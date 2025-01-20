// Importa o React para criar o componente.
import React from 'react';

// Importa componentes reutilizáveis da aplicação.
import Header from '../components/Header'; // Cabeçalho da página.
import Footer from '../components/Footer'; // Rodapé da página.
import Banner from '../components/Banner'; // Banner principal da página.
import ContactForm from '../components/ContactForm'; // Formulário de contato.

function Contato() {
  return (
    <div>
      {/* Renderiza o cabeçalho. */}
      <Header />

      {/* Renderiza o banner principal. */}
      <Banner />

      {/* Renderiza o formulário de contato. */}
      <ContactForm />

      {/* Renderiza o rodapé. */}
      <Footer />
    </div>
  );
}

// Exporta o componente para ser usado em outras partes da aplicação.
export default Contato;

/**
 * Propósito do arquivo:
 * Este arquivo define o componente da página "Contato", que permite aos usuários entrar em contato com a equipe ou suporte.
 * Ele utiliza:
 * 1. **Header e Footer**: Componentes que encapsulam o cabeçalho e o rodapé da página.
 * 2. **Banner**: Um banner visual que destaca a página.
 * 3. **ContactForm**: Um formulário para que os usuários possam enviar mensagens ou dúvidas.
 * A página é projetada para facilitar a comunicação, mantendo uma estrutura visual consistente com o restante da aplicação.
 */
