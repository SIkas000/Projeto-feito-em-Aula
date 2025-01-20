// Importa a biblioteca `styled-components` para criar componentes estilizados.
import styled from 'styled-components';

// Importa a imagem que será exibida ao lado do formulário.
import ImageRight from '../assets/img2.png';

// Container principal do formulário de contato e imagem.
const ContactContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 50px 20px;
    max-width: 1000px;
    margin: 0 auto;
`;

// Container para o formulário de contato.
const FormContainer = styled.div`
    flex: 3;
    text-align: center;
`;

// Campo de entrada para informações no formulário.
const SearchInput = styled.input`
    width: 50%;
    margin: 0 auto 20px auto;
`;

// Botão de envio do formulário.
const Button = styled.button`
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 10px;

    &:hover {
        background-color: #0056b3;
    }
`;

// Container para a imagem decorativa.
const ImageContainer = styled.div`
    flex: 2;
    img {
        width: 300px;
        height: 400px;
        object-fit: cover;
        border-radius: 5px;
    }
`;

// Componente principal do formulário de contato.
function ContactForm() {
    return (
        <ContactContainer>
            {/* Formulário de contato */}
            <FormContainer>
                <form>
                    <SearchInput type="text" placeholder="Nome" />
                    <SearchInput type="email" placeholder="E-mail" />
                    <SearchInput type="text" placeholder="Assunto" />
                    <SearchInput type="text" placeholder="Telefone" />
                    <SearchInput type="textarea" placeholder="Mensagem" />
                    <Button type="submit">Enviar</Button>
                </form>
            </FormContainer>

            {/* Imagem decorativa ao lado do formulário */}
            <ImageContainer>
                <img src={ImageRight} alt="Imagem Descritiva" />
            </ImageContainer>
        </ContactContainer>
    );
}

// Exporta o componente para ser usado em outras partes da aplicação.
export default ContactForm;

/**
 * Propósito do arquivo:
 * Este arquivo define o componente `ContactForm`, que exibe um formulário de contato estilizado com uma imagem decorativa.
 * Ele utiliza:
 * 1. **Campos de formulário**: Nome, e-mail, assunto, telefone e mensagem.
 * 2. **Botão de envio**: Permite enviar os dados preenchidos.
 * 3. **Imagem decorativa**: Exibida ao lado do formulário para melhorar a estética da página.
 * Este componente é projetado para capturar mensagens ou dúvidas enviadas pelos usuários de forma clara e organizada.
 */
