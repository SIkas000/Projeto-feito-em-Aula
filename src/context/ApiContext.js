// Importa o React e os métodos necessários para criar e usar contextos.
import React, { createContext, useContext } from 'react';

// Cria um contexto para armazenar a URL base da API.
// O valor padrão é a variável de ambiente `REACT_APP_API_URL`.
const ApiContext = createContext(process.env.REACT_APP_API_URL);

// Hook personalizado para acessar o valor do contexto `ApiContext`.
// Facilita o acesso à URL da API em componentes que utilizam o contexto.
export const useApiUrl = () => useContext(ApiContext);

// Componente provedor do contexto da URL da API.
// Envolve os componentes filhos e fornece o valor do contexto.
export const ApiProvider = ({ children }) => {
  // Define a URL da API, priorizando o valor da variável de ambiente.
  const apiUrl = process.env.REACT_APP_API_URL || "https://dundermifflinchico.azurewebsites.net";

  // Retorna o provedor do contexto com o valor da URL.
  return <ApiContext.Provider value={apiUrl}>{children}</ApiContext.Provider>;
};

/**
 * Propósito do arquivo:
 * Este arquivo define o contexto `ApiContext` para armazenar e compartilhar a URL base da API em toda a aplicação.
 * Ele inclui:
 * 1. **`ApiProvider`**: Um provedor que encapsula os componentes da aplicação e fornece a URL da API.
 * 2. **`useApiUrl`**: Um hook personalizado que facilita o acesso ao valor do contexto, permitindo que os componentes
 *    recuperem a URL da API de forma simples.
 * 3. **Fallback da URL**: Caso a variável de ambiente `REACT_APP_API_URL` não esteja definida, é usada uma URL padrão.
 * Este arquivo centraliza a configuração da URL da API, simplificando alterações e evitando duplicação de código.
 */
