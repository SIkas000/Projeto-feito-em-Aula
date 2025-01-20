// Importa o React e os hooks `useEffect` e `useState`.
import React, { useEffect, useState } from 'react';

// Importa a biblioteca `axios` para realizar requisições HTTP.
import axios from 'axios';

// Importa componentes da aplicação.
import Header from '../components/Header';
import Banner from '../components/Banner';
import PersonagensCard from '../components/PersonagensCard';
import Footer from '../components/Footer';

// Importa o contexto para obter a URL base da API.
import { useApiUrl } from '../context/ApiContext';

// Componente principal da página de personagens.
function Persona() {
  // Estado local para armazenar a lista de personagens.
  const [characters, setCharacters] = useState([]);

  // Obtém a URL base da API através do contexto.
  const apiUrl = useApiUrl();

  // Hook `useEffect` para buscar os personagens ao montar o componente.
  useEffect(() => {
    // Função assíncrona para buscar personagens da API.
    const fetchCharacters = async () => {
      try {
        // Realiza uma requisição GET para a rota `/api/personagens`.
        const response = await axios.get(`${apiUrl}/api/personagens`);

        // Atualiza o estado com os dados retornados da API.
        setCharacters(response.data);
      } catch (error) {
        // Exibe um erro no console caso a requisição falhe.
        console.error('Erro ao buscar personagens', error);
      }
    };

    // Chama a função para buscar os dados.
    fetchCharacters();
  }, [apiUrl]); // O efeito será executado novamente caso `apiUrl` mude.

  return (
    <div>
      {/* Renderiza o cabeçalho da página. */}
      <Header />

      {/* Renderiza o banner principal da página. */}
      <Banner />

      {/* Renderiza os cartões de personagens, passando a lista como propriedade. */}
      <PersonagensCard characters={characters} />

      {/* Renderiza o rodapé da página. */}
      <Footer />
    </div>
  );
}

// Exporta o componente para ser usado em outras partes da aplicação.
export default Persona;

/**
 * Propósito do arquivo:
 * Este arquivo define o componente da página "Persona", que exibe uma lista de personagens.
 * Ele utiliza:
 * 1. **axios**: Para buscar os dados dos personagens através de uma requisição HTTP para a API.
 * 2. **useEffect**: Para realizar a busca dos personagens quando o componente é montado.
 * 3. **useState**: Para gerenciar localmente a lista de personagens.
 * 4. **useApiUrl**: Para obter dinamicamente a URL base da API a partir do contexto.
 * A página é estruturada para exibir os personagens em um formato organizado, com um cabeçalho, um banner e cartões para cada personagem.
 */
