// Importa a biblioteca `styled-components` para criar componentes estilizados.
import styled from 'styled-components';

// Importa a imagem de fundo do banner.
import BuildingImage from '../assets/building.png';

// Define o estilo para o container do banner.
const BannerContainer = styled.div`
    background-image: url(${BuildingImage}); // Define a imagem de fundo.
    height: 300px; // Altura fixa do banner.
    background-size: cover; // Faz a imagem cobrir todo o espaço do container.
    display: flex; // Define um layout flexbox.
    align-items: center; // Alinha o conteúdo verticalmente ao centro.
    justify-content: center; // Centraliza o conteúdo horizontalmente.
`;

// Define o estilo para o texto do banner.
const BannerText = styled.p`
    color: #333; // Cor do texto.
    font-size: 32px; // Tamanho da fonte.
    font-weight: bold; // Define o texto como negrito.
`;

// Componente principal do banner.
function Banner() {
    return (
        <BannerContainer>
            {/* Texto centralizado dentro do banner. */}
            <BannerText>Dunder Mifflin Paper Company</BannerText>
        </BannerContainer>
    );
}

// Exporta o componente para ser usado em outras partes da aplicação.
export default Banner;

/**
 * Propósito do arquivo:
 * Este arquivo define o componente `Banner`, que exibe uma seção visual com uma imagem de fundo e texto centralizado.
 * Ele utiliza:
 * 1. **`styled-components`**: Para criar componentes estilizados como `BannerContainer` e `BannerText`.
 * 2. **Imagem de fundo**: A imagem de um prédio da empresa é usada como plano de fundo do banner.
 * O banner é projetado para destacar a marca "Dunder Mifflin Paper Company", combinando apelo visual e simplicidade.
 */
