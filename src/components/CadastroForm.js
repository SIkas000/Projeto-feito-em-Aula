// Importa o React e o hook `useState` para gerenciar estados.
import React, { useState } from 'react';

// Importa uma imagem para exibição no lado direito do formulário.
import ImgRight from '../assets/img2.png';

// Importa os componentes para exibir a lista e o formulário de personagens.
import PersonagemList from './PersonagemList';
import PersonagemForm from '../components/PersonagensForm';

// Importa os estilos para a página de cadastro.
import { PageContainer, FormContainer, ImageContainer, Title } from '../styles/CadastroFormStyle';

// Componente principal da página de cadastro.
function CadastroPage() {
  // Estado para gerenciar quando a lista de personagens precisa ser atualizada.
  const [refresh, setRefresh] = useState(false);

  // Estado para armazenar os dados do personagem em edição.
  const [editPersonagem, setEditPersonagem] = useState(null);

  return (
    <div>
      {/* Container principal para organizar o layout. */}
      <PageContainer>
        {/* Seção do formulário de cadastro. */}
        <FormContainer>
          {/* Título do formulário. */}
          <Title>Cadastro de Personagens</Title>

          {/* Componente do formulário de personagens. */}
          <PersonagemForm
            setRefresh={setRefresh} // Passa a função para atualizar a lista após cadastro/edição.
            editPersonagem={editPersonagem} // Passa os dados do personagem em edição.
            setEditPersonagem={setEditPersonagem} // Permite alterar o personagem em edição.
          />
        </FormContainer>

        {/* Seção da imagem no lado direito. */}
        <ImageContainer>
          <img src={ImgRight} alt="Imagem decorativa" />
        </ImageContainer>
      </PageContainer>

      {/* Linha horizontal para separar as seções. */}
      <hr />

      {/* Título para a lista de personagens cadastrados. */}
      <Title>Personagens Cadastrados</Title>

      {/* Componente que exibe a lista de personagens cadastrados. */}
      <PersonagemList
        refresh={refresh} // Passa o estado que indica se a lista deve ser atualizada.
        setRefresh={setRefresh} // Permite atualizar a lista.
        setEditPersonagem={setEditPersonagem} // Permite configurar o personagem que será editado.
      />
    </div>
  );
}

// Exporta o componente para ser usado em outras partes da aplicação.
export default CadastroPage;

/**
 * Propósito do arquivo:
 * Este arquivo define o componente `CadastroPage`, que exibe uma página completa para cadastro e listagem de personagens.
 * Ele utiliza:
 * 1. **`PersonagemForm`**: Um formulário para cadastrar ou editar personagens.
 * 2. **`PersonagemList`**: Uma lista exibindo todos os personagens cadastrados.
 * 3. **Estados (`useState`)**: Para gerenciar atualizações na lista de personagens e dados do personagem em edição.
 * 4. **Estilos Modulares**: Importados de `CadastroFormStyle` para manter uma interface visual consistente.
 * A página é dividida em duas partes principais: o formulário de cadastro e a lista de personagens, com suporte para edição.
 */
