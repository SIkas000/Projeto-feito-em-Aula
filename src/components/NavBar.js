// Importa o React para criar o componente.
import React from 'react';

// Importa `styled-components` para criar estilos personalizados.
import styled from 'styled-components';

// Importa o componente `Link` do React Router DOM para navegação interna.
import { Link } from 'react-router-dom';

// Estilização do container da barra de navegação.
const NavBarContainer = styled.nav`
    display: flex; // Exibe os itens em linha.
    justify-content: space-around; // Espaça os itens uniformemente.
    align-items: center; // Alinha os itens verticalmente ao centro.
    padding: 1em 0; // Espaçamento interno.
`;

// Estilização dos links do menu.
const Menu = styled(Link)`
    color: #fff; // Cor branca para o texto.
    margin: 0 1em; // Espaçamento horizontal entre os itens.
    text-decoration: none; // Remove o sublinhado padrão dos links.
    cursor: pointer; // Define o cursor como "mão" ao passar sobre o link.

    &:hover {
        text-decoration: underline; // Sublinha o texto ao passar o mouse.
    }
`;

// Componente funcional da barra de navegação.
function NavBar() {
    return (
        <NavBarContainer>
            {/* Links para as páginas principais do site. */}
            <Menu to="/">Home</Menu>
            <Menu to="/personagens">Personagens</Menu>
            <Menu to="/temporadas">Temporadas</Menu>
            <Menu to="/contato">Contato</Menu>
            <Menu to="/login">Cadastro</Menu>
        </NavBarContainer>
    );
}

// Exporta o componente para ser usado em outras partes da aplicação.
export default NavBar;

/**
 * Propósito do arquivo:
 * Este arquivo define o componente `NavBar`, que é a barra de navegação principal da aplicação.
 * Ele utiliza:
 * 1. **React Router DOM (`Link`)**: Para criar links de navegação interna sem recarregar a página.
 * 2. **Estilização com `styled-components`**: Para criar um layout limpo e estilizado.
 * 3. **Design responsivo**: Os itens do menu são espaçados uniformemente e estilizados com interatividade (efeito de hover).
 * A barra de navegação permite fácil acesso às páginas principais do site, garantindo uma boa experiência de usuário.
 */
