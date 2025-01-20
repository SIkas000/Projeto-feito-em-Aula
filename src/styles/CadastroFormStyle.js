import styled from "styled-components"

export const PageContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 50px 20px;
    max-width: 1000px;
    margin: auto;
`
export const FormContainer = styled.div`
    flex: 3;
    text-align: left;
    max-width: 1000px;
    margin: auto;
    margin-bottom:50px;
`
export const Title = styled.h1`
    margin-top: 0;
    margin-bottom: 20px;
    text-align: left;
`
export const ImageContainer = styled.div`
    flex: 2;
`
export const Img = styled.img`
        width: 300px;
        height: 400px;
        object-fit: cover;
        border-radius: 5px;
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom:20px;
`
export const Input = styled.input`
    display: block;
    width:80%;
    padding: 15px;
    margin-bottom:10px;
    border: 1px solid #ccc;
    border-radius: 5px;
`
export const TextArea = styled.textarea`
    display: block;
    width:80%;
    padding: 15px;
    margin-bottom:10px;
    border: 1px solid #ccc;
    border-radius: 5px;
`
export const FileInput = styled.input`
    display: block;
    width:80%;
    padding: 15px;
    margin-bottom:10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
    &:focus{
        border-color: #007bff;
    }
`
export const Button = styled.button`
    padding: 10px 20px;
    background-color: #007bff;
    color:#fff;
    border: none;
    border-radius: 5px;
    margin-top:10px;
    font-size:16px;
    cursor: pointer;
    transition: background-color 0.3s;
    &:hover{
        background-color: #0056b3;
    }
`
export const CharacterCount = styled.div`
    font-size: 12px;
    color: #555;
    align-self: flex-start;
    margin-left: 10%;
    margin-bottom:10px;
`